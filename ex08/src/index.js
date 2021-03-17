function logicalOperator(num) {
  if (num > 30 || num < 20) {
    return "Out";
  }
  return "In";
}

console.log(logicalOperator(0));
console.log(logicalOperator(9));
console.log(logicalOperator(20));
console.log(logicalOperator(23));
console.log(logicalOperator(30));
console.log(logicalOperator(31));
console.log(logicalOperator(105));
//change above
module.exports = logicalOperator;
