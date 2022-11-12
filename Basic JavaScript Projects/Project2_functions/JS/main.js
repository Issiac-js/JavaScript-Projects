function makeText() { // a function called "makeText" used to print "Hellow world!" on a button click in the webpage.

    document.getElementById("text-write").innerHTML = "Hello World!"; // using documnet.getElementByID() to find where to print the text.

};

function myFunction(){ // Another funtion made to change the text from "click here" to a concatenated string within the function.
    var scentence = "I am learning a lot "; // a variable with the first part of the scentence
    scentence += "from this book"; // using the += operator to concatenate the string
    document.getElementById("concatenate").innerHTML= scentence; // using the document.getElementById() to find where to place the string. 

};

// MATH SECTION FOLLOWING 

function math_function(){

    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2+2= " + addition;

};

