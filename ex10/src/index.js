// change below
function logicOrder(num) {
  if (num < 50) {
    return "less then 50";
  } else if (num < 100) {
    return "Less then 100";
  } else {
    return "Greater then or equal to 100";
  }
}

console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));
// change above
module.exports = logicOrder;
