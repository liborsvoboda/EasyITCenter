import { ViewPlugin } from '@codemirror/view';
import { getText } from "./helpers/get-text.js";
export const notifyOnTextChanges = onTextChange => ViewPlugin.define(() => ({
  update({
    docChanged,
    view
  }) {
    if (!docChanged) return;
    onTextChange(() => getText(view));
  }
}));