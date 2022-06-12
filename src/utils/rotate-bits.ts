export const rotateLeft = (bytes: string[]): string[] => {
  const bit = bytes.shift();
  if (bit !== undefined) {
    bytes.push(bit);
  }
  return bytes;
};

export const rotateRight = (bytes: string[]): string[] => {
  const bit = bytes.pop();
  if (bit !== undefined) {
    bytes.unshift(bit);
  }
  return bytes;
};
