function switchCase(letter) {
  // Change below
  var animals = "";
  switch (letter) {
    case "a":
      animals = "antilope";
      break;
    case "b":
      animals = "bird";
      break;
    case "c":
      animals = "cat";
      break;
    default:
      animals = "stuff";
      break;
  }
  // change above
  return animals;
}

console.log(switchCase("a")); // change thisl line
console.log(switchCase("b")); // change thisl line
console.log(switchCase("c")); // change thisl line
console.log(switchCase("d")); // change thisl line
console.log(switchCase(4)); // change thisl line

module.exports = switchCase;
