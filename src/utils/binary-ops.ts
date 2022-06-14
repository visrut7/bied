export const xor = (bytesArray: string[][]): string[] => {
  const totalbits = bytesArray[0].length;
  for (let i = 0; i < totalbits; i++) {
    let bitCount = 0;
    for (let j = 0; j < bytesArray.length; j++) {
      if (bytesArray[j][i] == "1") {
        bitCount += 1;
      }
    }
    if (bitCount % 2 === 1) {
      bytesArray[0][i] = "1";
    } else {
      bytesArray[0][i] = "0";
    }
  }
  return [...bytesArray[0]];
};

export const or = (bytesArray: string[][]): string[] => {
  const totalbits = bytesArray[0].length;
  for (let i = 0; i < totalbits; i++) {
    let bit = 0;
    for (let j = 0; j < bytesArray.length; j++) {
      if (bytesArray[j][i] == "1") {
        bit = bit | 1;
      } else {
        bit = bit | 0;
      }
    }
    bytesArray[0][i] = `${bit}`;
  }
  return [...bytesArray[0]];
};

export const and = (bytesArray: string[][]): string[] => {
  const totalbits = bytesArray[0].length;
  for (let i = 0; i < totalbits; i++) {
    let bit = 1;
    for (let j = 0; j < bytesArray.length; j++) {
      if (bytesArray[j][i] == "1") {
        bit = bit & 1;
      } else {
        bit = bit & 0;
      }
    }
    bytesArray[0][i] = `${bit}`;
  }
  return [...bytesArray[0]];
};
