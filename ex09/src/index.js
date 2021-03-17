function functionElse(num) {
  var result = "";
  if (num <= 5) {
    result = "5 or smaller";
  } else {
    result = "Bigger then 5";
  }
  console.log(result);
}
{
  functionElse(4);
  functionElse(5);
  functionElse(6);
  functionElse(10);
}
//change above
module.exports = functionElse;
