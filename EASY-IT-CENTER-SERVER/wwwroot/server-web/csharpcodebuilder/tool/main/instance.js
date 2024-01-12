import { StateEffect } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { createExtensions, createState } from "../codemirror/create.js";
import { getText } from "../codemirror/helpers/get-text.js";
import { Connection } from "../protocol/connection.js";
import { LANGUAGE_DEFAULT } from "../protocol/languages.js";
import { Session } from "../protocol/session.js";
import { installConnectionLossView } from "./connection-loss-view.js";
import { ContainerRoot } from "./container-root.js";
import { THEME_LIGHT } from "./theme.js";
class Instance {
  #context;
  #connectCalled = false;
  constructor(context) {
    this.#context = context;
  }
  getCodeMirrorView() {
    return this.#context.codeMirror.view;
  }
  getRootElement() {
    return this.#context.root.element;
  }
  getText() {
    return getText(this.#context.codeMirror.view);
  }
  setText(text) {
    this.#context.codeMirror.view.dispatch({
      changes: {
        from: 0,
        to: this.#context.codeMirror.view.state.doc.length,
        insert: text
      }
    });
  }
  getCursorOffset() {
    return this.#context.codeMirror.view.state.selection.main.from;
  }
  getLanguage() {
    return this.#context.language;
  }
  setLanguage(value) {
    if (value === this.#context.language) return;
    const {
      session,
      codeMirror
    } = this.#context;
    session.setOptions({
      language: value
    });
    codeMirror.extensions = codeMirror.extensionSwitcher.switchLanguageExtension(codeMirror.extensions, value);
    codeMirror.view.dispatch({
      effects: StateEffect.reconfigure.of(codeMirror.extensions)
    });
    this.#context.language = value;
  }
  setServerOptions(value) {
    this.#context.session.setOptions(value);
  }
  setTheme(value) {
    const {
      root,
      codeMirror
    } = this.#context;
    codeMirror.extensions = codeMirror.extensionSwitcher.switchThemeExtension(codeMirror.extensions, value);
    codeMirror.view.dispatch({
      effects: StateEffect.reconfigure.of(codeMirror.extensions)
    });
    root.setThemeClass(value);
  }
  setServiceUrl(url, {
    disconnected
  } = {}) {
    this.#context.disconnected = disconnected ?? false;
    this.#connectCalled = false;
    this.#context.connection.setUrl(url, {
      closed: disconnected
    });
  }
  connect() {
    if (!this.#context.disconnected) throw new Error('Connect can only be called if options.disconnected was set.');
    if (this.#connectCalled) throw new Error('Connect can only be called once per mirrorsharp instance (on start).');
    this.#context.connection.open();
    this.#connectCalled = true;
  }
  destroy() {
    this.#context.root.destroy();
    this.#context.session.destroy();
    this.#context.connection.close();
  }
}
export const createInstance = (container, options) => {
  const {
    language = LANGUAGE_DEFAULT,
    theme = THEME_LIGHT,
    disconnected
  } = options;
  const connection = new Connection(options.serviceUrl, {
    closed: disconnected
  });
  const serverOptions = {
    ...{
      language
    },
    ...(options.serverOptions ?? {})
  };
  const session = new Session(connection, serverOptions, options.on);
  const [cmExtensions, extensionSwitcher] = createExtensions(connection, session, {
    language,
    theme,
    themeSpec: options.codeMirror.theme ?? {},
    extraExtensions: options.codeMirror.extensions ?? [],
    onTextChange: options.on.textChange
  });
  const cmView = new EditorView({
    state: createState(cmExtensions, {
      text: options.text,
      cursorOffset: options.cursorOffset
    })
  });
  const root = new ContainerRoot(container, cmView.dom, theme);
  installConnectionLossView(root, connection);
  const instance = new Instance({
    connection,
    session,
    disconnected: disconnected ?? false,
    language,
    codeMirror: {
      view: cmView,
      extensions: cmExtensions,
      extensionSwitcher
    },
    root
  });
  return instance;
};