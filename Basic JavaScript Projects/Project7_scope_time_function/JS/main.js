var z = 10; // global var

function aGlobal(){ // Function using global var
    document.getElementById("Show").innerHTML = aNum(); // output of function to main html document
    function aNum(){ // Nested Function to multiply number
        var numNew = z * 2;
        return numNew;

    };
    
};




function aError(){ // Function has a local var and an Error
    var y = 10;
    return x * 100; // using the wrong var to make an error
    
};

console.log(aError()); // Showing the error in console

function plant(){ // A funtion that give the user an output of rose or daisy.
    if (new Date().getHours > 18) {
        var plants = "Rose";
        
    }
    else{
        var plants = "Daisy";
    }
    document.getElementById("tree").innerHTML = plants; // output of function to main html document
};

console.log(plant());

function rent_Car(){ // A function to tell if you are old enough to rent a car
    Age = document.getElementById("age1").value; // gets value from index.html in the input field with the id age1.
    if (Age >= 25) {
        car_rental = "You are old enough to rent a car!";
    }
    else {
        car_rental = "You are not old enough to rent a car!";
    };

    document.getElementById("can_you_rent_a_car?").innerHTML = car_rental; // output of function to main html document
};

function Time_Function(){ // A funtion that tells time 
    var Time = new Date().getHours(); // setting the time variable 
    var reply;
    if (Time < 12 == Time > 0) { // if statment checks if its morning hours
        reply = "It is Morning";
    }
    else if (Time >= 12 == Time < 18) { // if statment checks if its afternoon
        reply = "It is  afternoon";
    }
    else { // Else captures everything else and says its evening
        reply = "It is evening!"
    };
    document.getElementById("Time_of_day").innerHTML = reply; // output of function to main html document
}

