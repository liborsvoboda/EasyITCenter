import { lineSeparator } from "../../protocol/line-separator.js";
export const getEnd = (start, length) => start + length;
export const getLength = (start, end) => end - start;
export const convertToServerPosition = (doc, position) => {
  const line = doc.lineAt(position);
  const lineSeparatorOffset = (line.number - 1) * (lineSeparator.length - 1);
  return position + lineSeparatorOffset;
};
export const convertFromServerPosition = (doc, position) => {
  const positionAsNumber = position;
  let serverLineStart = 0;
  for (let n = 1; n <= doc.lines; n++) {
    const line = doc.line(n);
    const nextServerLineStart = serverLineStart + line.length + lineSeparator.length;
    if (positionAsNumber < nextServerLineStart || n === doc.lines) return positionAsNumber - serverLineStart + line.from;
    serverLineStart = nextServerLineStart;
  }
  throw new Error(`Failed to map position from server: ${positionAsNumber}`);
};