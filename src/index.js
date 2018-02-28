module.exports = function getZerosCount(number) {
  for (var res = 0; number >= 5;)
    number = ~~(number / 5), res += number;
  return res;
}