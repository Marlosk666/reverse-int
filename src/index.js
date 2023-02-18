module.exports = function reverse (n) {
  const number = Math.abs(n);
  const numberDigitsArray = Array.from(String(number).split('').reverse());
  return numberDigitsArray.join('');
}

