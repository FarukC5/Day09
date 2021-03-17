function switchCaseSequential(num) {
  // Change below
  var answer = "";
  switch (num) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  // change above
  return answer;
}

console.log(switchCaseSequential(1)); // change thisl line
console.log(switchCaseSequential(2)); // change thisl line
console.log(switchCaseSequential(3)); // change thisl line
console.log(switchCaseSequential(4)); // change thisl line
console.log(switchCaseSequential(5)); // change thisl line
console.log(switchCaseSequential(6)); // change thisl line
console.log(switchCaseSequential(7)); // change thisl line
console.log(switchCaseSequential(8)); // change thisl line
console.log(switchCaseSequential(9)); // change thisl line

module.exports = switchCaseSequential;
