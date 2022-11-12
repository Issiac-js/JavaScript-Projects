function myMathFunction(){ // addition 
    var addNums = 2 + 8; // varible and math operation 
    document.getElementById("math").innerHTML = "2 + 8 = " + addNums; // shown on page


};

function SubtractionByMath(){ // subtraction 
    var subtraction = 7 - 2; // varible and math operation 
    document.getElementById("math1").innerHTML = "7 - 2 =" + subtraction; // shown on page

};

function multiplyNums(){ // multiply numbers
    var multiply = 5 * 2; // varible and math operation  
    document.getElementById("math2").innerHTML = "5 * 2 = " + multiply; // shown on page 
};

function divideNums(){ //  division function 
    var div = 10 / 2; // varible and math operation 
    document.getElementById("math3").innerHTML = "10 / 2 = " + div; // shown on page
};

function moreMath(){ // its a multi step operation 
    var someMath = (2 + 8) * 10 / 2 - 8; // varible and math operation 
    document.getElementById("math4").innerHTML = " (2+8) * 10 / 2 - 8 = " + someMath; // shown on page
};

function modulas(){ // tells us the remainder after division 
    var modulasMath = 10 % 4 // varible and math operation 
    document.getElementById("math5").innerHTML = "The remainder of 10 / 4 = " + modulasMath; // shown on page
};

function negativeNum(){ // function to math the varbile x a negative then show it on webpage
    var x = 10; // varible
    document.getElementById("math6").innerHTML = -x; // shown on page
}

var y = 5; // varible y
y++; // math operator to increase by one
document.write(y + "<br>"); // shows us varible y on webpage and includes a line break

var z = 22; // varible z 
z--; // math operator to decrease 
document.write(z + "<br>"); // shows us z on the webpage

window.alert(Math.random() * 100); // window alert to give us a random number from 0 - 100

document.write(Math.round(4.6) + "<br>"); // round number and show it on webpage