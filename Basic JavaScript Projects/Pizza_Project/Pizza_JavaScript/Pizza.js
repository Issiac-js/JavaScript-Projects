function getReceipt() {
    //This initializes our string so it can get passed from
    // function to function growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>"; // Vars 
    var runningTotal = 0; // Vars 
    var sizeTotal = 0; // vars
    var sizeArray = document.getElementsByClassName("size"); // var array
    for (var i = 0; i < sizeArray.length; i++) { // for loop to check the values
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") { //conditional statments to come up with prioce for selection
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal
    console.log(selectedSize+" = $"+sizeTotal+".00"); // Console logging to see whats going on in the console to match ouput.
    console.log("size text1:" + text1);
    console.log("subtotal: $"+runningTotal+".00")
    // These vars will get passed on to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0; // var 
    var selectedTopping = []; // array var
    var toppingArray = document.getElementsByClassName("toppings"); // another var array
    for (var j = 0; j < toppingArray.length; j++) { // for loop
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length; 
    if (toppingCount > 1) { // This gives us the one free topping 
        toppingTotal = (toppingCount - 1); // its done right here
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); 
    console.log("Total selected toppingitems: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purcahse Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1; // output 
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; // output
};