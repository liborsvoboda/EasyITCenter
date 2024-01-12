export function ensureDefined(value, name) {
  if (value == null) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Unexpected ${value} value at ${name}.`);
  }
  return value;
}