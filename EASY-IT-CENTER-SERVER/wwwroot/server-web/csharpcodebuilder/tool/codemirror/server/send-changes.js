import { ViewPlugin } from '@codemirror/view';
import { lineSeparator } from "../../protocol/line-separator.js";
import { convertToServerPosition, getLength } from "../helpers/convert-position.js";
import { getString, getText } from "../helpers/get-text.js";
const sendReplace = (session, doc, from, to, newText, cursorIndexAfter) => {
  const start = convertToServerPosition(doc, from);
  const newTextString = typeof newText === 'string' ? newText : getString(newText);
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  session.sendPartialText({
    start,
    length: getLength(start, convertToServerPosition(doc, to)),
    newText: newTextString,
    cursorIndexAfter
  });
};
const sendChanges = (session, startState, changes, prevCursorOffset, cursorIndexAfter) => {
  let changeCount = 0;
  let single;
  let startOffset = 0;
  let lastDoc = startState.doc;
  changes.iterChanges((from, to, _f, _t, inserted) => {
    changeCount += 1;
    if (changeCount === 1) {
      single = {
        from,
        to,
        text: inserted
      };
      return;
    }
    if (single) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      sendReplace(session, lastDoc, single.from, single.to, single.text, cursorIndexAfter);
      lastDoc = lastDoc.replace(from, to, inserted);
      startOffset += single.text.length - (single.to - single.from);
      single = null;
    }
    sendReplace(session, lastDoc, startOffset + from, startOffset + to, inserted, cursorIndexAfter);
    startOffset += inserted.length - (to - from);
    lastDoc = lastDoc.replace(from, to, inserted);
  });
  if (single) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const {
      from,
      to,
      text
    } = single;
    if (from === prevCursorOffset && to === from && text.length === 1) {
      const char = text.line(1).text.charAt(0);
      if (char === '' && text.lines === 2 && text.line(1).length === 0) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        sendReplace(session, startState.doc, from, to, lineSeparator, cursorIndexAfter);
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/no-non-null-assertion
      session.sendTypeChar(char);
      return;
    }
    sendReplace(session, startState.doc, from, to, text, cursorIndexAfter);
  }
};
export const sendChangesToServer = session => ViewPlugin.define(view => {
  session.setFullText({
    getText: () => getText(view),
    getCursorIndex: () => convertToServerPosition(view.state.doc, view.state.selection.main.from)
  });
  return {
    update({
      docChanged,
      selectionSet,
      changes,
      state,
      startState
    }) {
      const prevCursorOffset = startState.selection.main.from;
      const cursorIndex = convertToServerPosition(state.doc, state.selection.main.from);
      if (docChanged) {
        sendChanges(session, startState, changes, prevCursorOffset, cursorIndex);
        return; // this will send selection move so we don't have to repeat
      }

      if (selectionSet) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        session.sendMoveCursor(cursorIndex);
      }
    }
  };
});