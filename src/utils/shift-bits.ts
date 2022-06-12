export const shiftRight = (bytes: string[]): string[] => {
  bytes.pop();
  bytes.unshift("0");
  return bytes;
};

export const shiftLeft = (bytes: string[]): string[] => {
  bytes.shift();
  bytes.push("0");
  return bytes;
};
