// change code below 
function inverseWhile() {
  var fiveNumbers = "";
  var x = 5;
  while (x >= 0) {
    fiveNumbers += x;
    if (x != 0) fiveNumbers += ", ";
    x--;
  }
  return fiveNumbers;
}
// change above
console.log(inverseWhile());
module.exports = inverseWhile;
