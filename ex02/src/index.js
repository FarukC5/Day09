function myFunction(myParameter) {         // strict equality (===)
  if (myParameter == true) {               // abstract equality (==) loose - labava jednakost
    return "The parameter is true!";       // assignment (=)
  } else {
    return "The parameter is false!";
  }
}
console.log(myFunction(true));
console.log(myFunction(false));
// change above
module.exports = myFunction;
