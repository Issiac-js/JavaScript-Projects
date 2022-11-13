document.write(typeof "Cats"); // The Output is "string" 
                              // becasue its printing
                              // what the type of data is to the wedpage
document.write("<br>"); // make a line break
document.write(isNaN("This is a string!")); // retunrs true becasue it is Not a Number (NaN)
document.write("<br>"); // another line break
document.write(isNaN("007")); // to get us the output False

function aNum(){ // a functions thats output is NaN
    var y = 0/0; // The math that gets us to that output
    document.getElementById("notNum").innerHTML = y; //Display output on webpage
};

function posNum(){ // This is a function to give us the output "Infinity"
    var x = (2E310); // The math that gets us to that output
    document.getElementById("twoBig").innerHTML = x; //Display output on webpage
};

function negNum(){ // This is a function to give us the output "-Infinity"
    var z = (-3E310); // The math that gets us to that output
    document.getElementById("twoSmall").innerHTML = z; //Display output on webpage
};

document.write("<br>"); // make a line break
document.write(10>2); // a math operation to get us the output True 
document.write("<br>"); // make a line break
document.write(2>15); // a math operation to get us the output False

console.log(2+2); // prints 4 to the console. 

console.log(4<2); // prints False to the console.

document.write("<br>"); // make a line break
document.write("<br>"); // make a line break
document.write(10 == 10); // checking if 10 is equal to 10 should return true
document.write("<br>"); // make a line break
document.write(10 == 11); // checking if 10 is equal to 11 should return false
document.write("<br> ------ <br>"); // make a line break
document.write(10 === 10); // should return true
document.write("<br>"); // make a line break
document.write(10 === "10"); // should return false
document.write("<br>"); // make a line break
document.write(10 === 11); // should return false
document.write("<br>"); // make a line break
document.write(10 === "11"); // should return false

document.write("<br>"); // make a line break
document.write("<br>"); // make a line break
document.write("<br> && operator <br>"); // make a line break
// using the "&&" operator & OR operator "||"
document.write(10>2 && 8>4); //should return true
document.write("<br>"); // make a line break
document.write(10>2 && 10<5); // should return false
document.write("<br>"); // make a line break
document.write("<br> OR operator ||"); // make a line break
document.write("<br>"); // make a line break
document.write(10<7 || 15>2); // should return true becasue one of the statements is true
document.write("<br>"); // make a line break
document.write(10<7 || 15<2); // should be false since both are fasle.

function not_Function(){ // function should return false since it is assuming the statement is not true and checking to see if that is correct. 
    document.getElementById("Not").innerHTML = !(20>10); //Display output on webpage
};

function not_Not() { // should return True since it assumes the statement is not true and it isn't
    document.getElementById("Not1").innerHTML = !(5>20); //Display output on webpage
};


 
