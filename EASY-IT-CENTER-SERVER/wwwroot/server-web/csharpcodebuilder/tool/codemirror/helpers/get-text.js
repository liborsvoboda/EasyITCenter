import { lineSeparator } from "../../protocol/line-separator.js";
export const getString = text => {
  // eslint-disable-next-line no-undefined
  return text.sliceString(0, undefined, lineSeparator);
};
export const getText = view => {
  // eslint-disable-next-line no-undefined
  return getString(view.state.doc);
};