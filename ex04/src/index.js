function compareDifferentValues(m, n) {
  if (m === n) {
    return "Equal";
  } else {
    return "Not equal";
  }
}
console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));           // ''  "" - ispraviti ako format vrati na ""
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));
// change above
module.exports = compareDifferentValues;
