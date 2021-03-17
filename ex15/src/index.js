// change below
function myDoWhile(){
    var myNumbers = "";
    var x = 0;
    do {
        myNumbers += x;
        if(x != 9){
            myNumbers += ", ";
        }
        x++;
    } while (x < 10);
    return myNumbers;
}
console.log(myDoWhile());
// change above 

module.exports = myDoWhile;