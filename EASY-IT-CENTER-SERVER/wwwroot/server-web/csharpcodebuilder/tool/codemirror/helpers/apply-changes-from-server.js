import { convertFromServerPosition, getEnd } from "./convert-position.js";
export const applyChangesFromServer = (view, changesFromServer) => {
  const [selection] = view.state.selection.ranges;
  const transaction = {
    changes: []
  };
  for (const {
    start,
    length,
    text
  } of changesFromServer) {
    const change = {
      from: convertFromServerPosition(view.state.doc, start),
      to: convertFromServerPosition(view.state.doc, getEnd(start, length)),
      insert: text
    };
    transaction.changes.push(change);
    if (selection && selection.from >= change.from && selection.from <= change.to) transaction.selection = {
      anchor: change.from + change.insert.length
    };
  }
  view.dispatch(transaction);
};