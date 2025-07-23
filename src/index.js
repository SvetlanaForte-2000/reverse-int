module.exports = function reverse(n) {
  const reversedStr = String(Math.abs(n)).split('').reverse().join('');
  return Number(reversedStr);
};
