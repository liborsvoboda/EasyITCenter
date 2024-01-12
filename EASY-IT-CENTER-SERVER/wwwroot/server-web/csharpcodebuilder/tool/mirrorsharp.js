import { createInstance } from "./main/instance.js";
const ensureNoUnknownOptions = (keyPrefix, unknown) => {
  let keys = Object.keys(unknown);
  if (keyPrefix) keys = keys.map(k => `${keyPrefix}.${k}`);
  if (keys.length === 0) return;
  throw new Error(`Unknown option${keys.length > 1 ? 's' : ''}: '${keys.join("', '")}'`);
};
// ts-unused-exports:disable-next-line
export
// eslint-disable-next-line import/no-default-export
default function mirrorsharp(container, options) {
  const {
    serviceUrl,
    text,
    cursorOffset,
    language,
    theme,
    on,
    disconnected,
    serverOptions,
    codeMirror,
    ...rest
  } = options;
  ensureNoUnknownOptions('', rest);
  const {
    textChange,
    connectionChange,
    serverError,
    slowUpdateWait,
    slowUpdateResult,
    ...onRest
  } = on ?? {};
  ensureNoUnknownOptions('on', onRest);
  const {
    extensions,
    theme: themeSpec,
    ...codeMirrorRest
  } = codeMirror ?? {};
  ensureNoUnknownOptions('codeMirror', codeMirrorRest);
  const instance = createInstance(container, {
    serviceUrl,
    text,
    cursorOffset,
    language,
    theme,
    on: {
      textChange,
      connectionChange,
      serverError,
      slowUpdateWait,
      slowUpdateResult
    },
    serverOptions,
    disconnected,
    codeMirror: {
      extensions,
      theme: themeSpec
    }
  });
  return instance;
}