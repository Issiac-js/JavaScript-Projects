
function Make_String() { // A function that makes a complete sentence using the concat() method 
    var text_1 = "This is";
    var text_2 = " a ";
    var text_3 = "complete scentence.";
    var whole_sentence = text_1.concat(text_2, text_3); // the concat() method being used 
    document.getElementById("concat_string").innerHTML = whole_sentence; // Output to the html file.
};

function slice_Method() { // A funtion using the Slice Method 
    var Sentence = "All work and No Play makes Johnny a Dull Boy.";
    var Section = Sentence.slice(27,33); // Here is the slice method being used 
    document.getElementById("slice").innerHTML = Section; // Output to Html file
};

function upper_Method() { // This Function turns the varible "text" into all uppercases 
    var text = "this will be turned into all uppercase by the \"toUpperCase()\" method."
    var result = text.toUpperCase(); // toUpperCase() method used here
    document.getElementById("upper").innerHTML = result; // showing result on HTML page.
};

function search_Method() { // This Function uses the .search("WORD") to find the index of the the first match where it begins 
    var text = "The red dog is over there";
    var position = text.search("over"); // Search method being used here.
    document.getElementById("search").innerHTML = position; // Returns index to HTML PAGE
};

function string_Method() { // A funtion using the "toString()" method takes any number and turns it into a string.
    var x = 163;
    document.getElementById("Numbers_to_String").innerHTML = x.toString(); // the method being used where the document is going to recieve the output.
};

function precision_Method() { // A function using the "toPrecision()" method to get the decimal to a certain length
    var y = 163.63686785;
    document.getElementById("Precision").innerHTML = y.toPrecision(5); // the method being used where the output is also to the html file.
};

function fixed_Method() { //Function that uses the "toFixed()" method where the number is coverted to a string and rounded to the nearest number.
    var z = 7.7765;
    document.getElementById("Fixed").innerHTML = z.toFixed(); // Method used at the end where the html file output is.
};

function value_Method() { // The Function uses the "valueOf()" method to return the primative value of a number.
    var y = 22.2; // The number is stored in the var but the primative value is the exact number stored in that varible location.
    document.getElementById("Value").innerHTML = y.valueOf(); // The method is being used here where the html output is as well.
};

