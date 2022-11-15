function get_Date(){ // Gets date and checks the hour and sees if its before 6pm
    if (new Date().getHours() < 18){ // Checking to see if its before 6pm
        document.getElementById("Greeting").innerHTML = "How are you today?";
    };
};


function Age_Function(){ // A function to tell if you are old enough to vote
    Age = document.getElementById("age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    };

    document.getElementById("How_old_are_you?").innerHTML = Vote; // output of function to main html document
};

