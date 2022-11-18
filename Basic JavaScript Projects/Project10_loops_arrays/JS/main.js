function Call_Loop() { // A function for a loop
    var digit = ""; // getting the varible that will later be called to hold the digit 
    var x = 1; // The varible for the loop
    while (x<11){ // the While Loop and conditions being set
        digit += "<br>" + x; // the varible Digit being set to the current iteration of X and a line break
        x++; // Adding one to the varible of X
        
    
    }; // end of the loop
    document.getElementById("loop").innerHTML = digit; // printing the digit to the html page

};

var test_string = "Hello, Wolrd!"; // a varible 
var test_legnth = test_string.length; // a varible that uses the length method 
document.getElementById("legnth").innerHTML = test_legnth; // printing the var test_legnth to the html page

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // an array of instruments 
var Content = ""; // a varbile to be used later to set the data to and print 
var y; // a varible to be used in the loop 

function for_Loop() { // The function going to be using the loop
    for (Y = 0; Y < Instruments.length; Y++) { // The loop itself is setting the var Y to 0 then the condition Y < then the length of Instruments ; then add 1 to y;
        Content += Instruments[Y] + "<br>"; // then this is the Content string that will display the output later in this function
    };
    document.getElementById("List_of_Instruments").innerHTML = Content; // the content var is being displayed on the html page.
};


function cat_pics() { // A Function that holds an Array.
    var Cat_pictures = []; // This is the Array var 
    Cat_pictures[0] = "sleeping"; // This is the index 0 holding the value "Sleeping"
    Cat_pictures[1] = "playing"; // This is the index 1 holding the value "Playing"
    Cat_pictures[2] = "eating"; // This is the index 2 holding the value "eating"
    Cat_pictures[3] = "purring"; // This is the index 3 holding the value "purring"
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_pictures[2] + "."; // the output using the index 2 of the array called Cat_pictures
};

function array_Function() { //A Function that holds an array
    var Car_brands = []; // This is that Array Var 
    Car_brands[0] = "Honda"; // The index 0 in the Array
    Car_brands[1] = "Toyota"; // the item in the index 1 of the Array 
    Car_brands[2] = "BMW";
    document.getElementById("Array").innerHTML = "I Drive a " + Car_brands[0] + " I also like the brand " + Car_brands[1]; // The Output.
};

function constant_function() { // A function that holds a constant
    const Music_instruments = {type: "Violin", brand:"Mark", color:"Black"}; // the object 
    Music_instruments.color = "Blue"; // changing the color of the object
    Music_instruments.price = "$900"; // adding a value to the object
    document.getElementById("Constant").innerHTML = "The cost of the " + Music_instruments.type + " was " + Music_instruments.price; // The ouput.

};

function let_function() { // A function that utilizes the let method 
    var yt = 22; // the var == 22
    function add_twonums(){ // the inner function is going to have the let in it
        let x = 21; // let is ued to keep it only between the block
        var p = yt + x; // this var p uses the var yt and let x inside the block
        document.getElementById("nums").innerHTML = p; // print within the block
    };
    add_twonums() // call for the inner function to run.
};

function my_return_function(){ // My Function to return PI 
    return Math.PI; // Return being used as well as Math.PI; Return stops the function and returns a value.
};

console.log(my_return_function()); // to see the output of my function that shows PI

let car = { // Let method on a object car
    make: "Honda ", // a make to the object
    model: "Accord ", // model of object
    year: "2011 ", // year of object
    color: "red ", // color of object
    disription: function() { // a function in the discription 
        return "The car is a " + this.year + this.color + this.make + this.model; // using this. to return the year make model and color to as well as the return to get the value sent to the dopcument later.
    }

};

document.getElementById("Car_Object").innerHTML = car.disription(); // the document asking for the car object specifically the discription which has the function to return the value which hass all the data sorted.

function my_loop_w_continue_and_break() { //A function with a continue and a break...
    var xyz; // the varible holding numbers
    
    for (xyz = 1; xyz < 15; xyz++ ) { // a For loop that itterates the numbers 
        if (xyz == 5){ // it will skip the number 5 
            continue // this casues it to skip number 5
        }
        else if (xyz == 11) { // this will stop at 10 once it hits 11 it wont log the 11 becasue console.log is called at the end.
            break // thius stops the loop
        }
        console.log(xyz) // this prints to console.
    }
    
}

my_loop_w_continue_and_break() // calling the function.