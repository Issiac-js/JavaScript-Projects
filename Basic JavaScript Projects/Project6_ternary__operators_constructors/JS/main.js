function Ride_Function(){ // A funtion using the "?" to tell if we can do something or not 
    var Height, Can_ride; // Variables 
    Height = document.getElementById("Height").value; // Getting the Value from the HTML doc 
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; // using the "?" to see what output it should give us 
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // displaying the output to the webpage
};

function voting_age(){ // A funtion using the "?" to tell if we can do something or not 
    var Age, Can_vote; // Variables 
    Age = document.getElementById("Age").value; // Getting the Value from the HTML doc 
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"; // using the "?" to see what output it should give us 
    document.getElementById("vote").innerHTML = Can_vote + " to vote!";  // displaying the output to the webpage
};

function vehicle(Make, Model, Year, Color) { // A function that is used to create an instance or is the parent of an instance
    this.vehicle_Make = Make; 
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
};

var Jack = new vehicle("Dodge", "Viper", 2020, "Red"); // Variables 
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // Variables 
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard"); // Variables 

function car(){ // A function that is used to create an instance or is the parent of an instance
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.vehicle_Color + "-colored " + Erik.vehicle_Model + " manufactured in " + Erik.vehicle_Year;
};

function info(Name, Age, Weight){ // A function that is used to create an instance or is the parent of an instance
    this.info_Name = Name;
    this.info_Age = Age;
    this.info_Weight = Weight;
};

var Issiac = new info("Issiac", 19, 220); // Variables 
var Loraine = new info("Loraine", 17, 110); // Variables 
var Jimmy = new info("Jimmy", 19, 225); // Variables  

function yaris(){ // A function that is displaying the output of a specific instance.
    document.getElementById("New_and_This").innerHTML = 
    Jimmy.info_Name + " is " + Jimmy.info_Age + " years old and weighs " + Jimmy.info_Weight + " lbs.";
};

function Person(First, last, Age, Eye){ // A function that is used to create an instance or is the parent of an instance
    this.Person_First = First;
    this.Person_Last = Last;
    this.Person_Age = Age;
    this.Person_Eye = Eye;
};

function aFunction(){ // A nested Funtion that counts when clicking adding one to the original varible.
    document.getElementById("Nested_Function").innerHTML = Count(); // Grabbing the Element ID the calling the nested Function "Count".
    function Count(){ // The nestred Funtion it just counts up using the += operation then retunring the value to the main function.
        var Starting_Point = 0; // Variables 
        function Plus_one() {Starting_Point += 1};
        Plus_one();
        return Starting_Point;
    }
}