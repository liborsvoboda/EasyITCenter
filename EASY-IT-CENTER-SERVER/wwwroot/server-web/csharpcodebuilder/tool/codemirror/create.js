import { history } from '@codemirror/commands';
import { indentUnit, syntaxHighlighting } from '@codemirror/language';
import { EditorState, EditorSelection } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { classHighlighter } from '@lezer/highlight';
import { THEME_DARK } from "../main/theme.js";
import { lineSeparator } from "../protocol/line-separator.js";
import { switchableExtension } from "./helpers/switchable-extension.js";
import { keymaps } from "./keymaps.js";
import { languageExtensions } from "./languages.js";
import { notifyOnTextChanges } from "./notify-on-text-changes.js";
import { autocompletionFromServer } from "./server/autocompletion.js";
import { connectionState } from "./server/connection-state.js";
import { diagnosticsFromServer } from "./server/diagnostics.js";
import { infotipsFromServer } from "./server/infotips.js";
import { sendChangesToServer } from "./server/send-changes.js";
import { signatureHelpFromServer } from "./server/signature-help.js";
export const createExtensions = (connection, session, options) => {
  const language = switchableExtension(options.language, l => languageExtensions[l]);
  const theme = switchableExtension(options.theme, t => EditorView.theme(options.themeSpec, {
    dark: t === THEME_DARK
  }));
  const initialExtensions = [indentUnit.of('    '), EditorState.lineSeparator.of(lineSeparator), history(), language.extension, syntaxHighlighting(classHighlighter), connectionState(connection), sendChangesToServer(session), diagnosticsFromServer(connection), infotipsFromServer(connection), signatureHelpFromServer(connection), autocompletionFromServer(connection), ...(options.onTextChange ? [notifyOnTextChanges(options.onTextChange)] : []),
  // has to go last so that more specific keymaps
  // in e.g. autocomplete have more priority
  keymaps, theme.extension].concat(options.extraExtensions);
  return [initialExtensions, {
    switchLanguageExtension: language.switch,
    switchThemeExtension: theme.switch
  }];
};
export const createState = (extensions, options = {}) => {
  return EditorState.create({
    ...(options.text ? {
      doc: options.text
    } : {}),
    ...(options.cursorOffset ? {
      selection: EditorSelection.single(options.cursorOffset)
    } : {}),
    extensions
  });
};