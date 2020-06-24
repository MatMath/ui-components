function getRandomNumber(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function replaceNumberInCode(
  code: string,
  position = getRandomNumber(0, code.length)
) {
  return (
    code.substr(0, position) +
    getRandomNumber(0, 10) +
    code.substr(position + 1)
  );
}

export function generateRandomCode() {
  return '000000'
    .split('')
    .map(() => getRandomNumber(0, 10))
    .join('');
}
