function myDictionary(){ // Name of function
    var Car = { // This is the name of the dictionary 
        model : "Honda", // the key value pairs
        color : "red", // the key value pairs
        trim : "6.5L v6 Coupe", // the key value pairs
        year : "2011" // the key value pairs

    }; // end of the dictionary 
    delete Car.trim; // Deleting one of the key-value pairs 
    document.getElementById("dictionary").innerHTML = Car.trim; // trying to display the KVP but shows up as undifined because it was deleted.
};