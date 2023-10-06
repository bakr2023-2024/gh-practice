const capitalize = (str) => {
  let s = str.slice().toLowerCase();
  s = s.slice(0, 1).toUpperCase() + s.slice(1);
  return s;
};
const reverseString = (str) => str.split("").reverse().join("");
const calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  },
};
const caesar = (msg, key) => {
  let code = "";
  for (let i = 0; i < msg.length; i++) {
    let ch = msg.charCodeAt(i);
    if (ch <= 90 && ch >= 65) {
      code += String.fromCharCode(((ch - 65 + key) % 26) + 65);
    } else if (ch >= 97 && ch <= 122) {
      code += String.fromCharCode(((ch - 97 + key) % 26) + 97);
    } else {
      code += msg[i];
    }
  }
  return code;
};
const analyzeArray = (arr) => {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  let sum = arr.reduce((accum, curr) => accum + curr, 0);
  arr.forEach((a) => {
    if (min > a) min = a;
    if (max < a) max = a;
  });
  return { average: sum / arr.length, min, max, length: arr.length };
};
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesar,
  analyzeArray,
};
