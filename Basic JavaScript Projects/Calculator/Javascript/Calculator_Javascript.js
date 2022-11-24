// Creates on object to keep track of values
const Calculator = {
    // This will display 0 on the calculator screen.
    Display_Value: '0',
    // This will hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    // This checks weather or not the second operand has been inputted by the user.
    Wait_Seconds_Operand: false,
    // This will hold the operator, we set it to null for now.
    operator: null,
};

// This modifies values each time a button is clicked on.
function Input_Digit(digit) {
    const {Display_Value, Wait_Seconds_Operand } = Calculator;
    //THis checks if the Wait_Seconds_Operand is true and sets Display_Value
    // to the key that was clicked on.
    if (Wait_Seconds_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Seconds_Operand = false;
    } else {
        // This overwrites Display_Value if current value is 0
        // otherwise it adds onto it.
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
    }
}

// This section handels decimal points.
function Input_Decimal(dot) {
    //This ensures that accidental clicking of the decimal point doesn't
    // cause bugs in the operation. 
    if (Calculator.Wait_Seconds_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // We are saying the Display_value does not contain a decimal point
        // we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

// This section handels operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    // When an operator key is pressed wqe convert the current number
    //displayed on the sceen to a number then store the result in Calculator.Firs_Operand
    //if it doesn't already exist.
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if an operator already exists and if Wait_Second_operand is true,
    // Then updates the operator an exists from the function.
    if(operator && Calculator.Wait_Seconds_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand === null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { // Checks iof an operator already exists
        const Value_Now = First_Operand || 0;
        //If operator exsits, property lookup is preformed for the operator
        // in the Perform_calculation object and the function that matches the
        // operator is executed.
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Here we add a fixed amount of numbers after the decimal.
        result = Number(result).toFixed(9);
        // This will remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);

    }
    Calculator.Wait_Seconds_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_operand) => First_Operand / Second_operand,
    '*': (First_Operand, Second_operand) => First_Operand * Second_operand,
    '+': (First_Operand, Second_operand) => First_Operand + Second_operand,
    '-': (First_Operand, Second_operand) => First_Operand - Second_operand,
    '=': (First_Operand, Second_operand) => Second_operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Seconds_Operand = false;
    Calculator.operator = null;
}

// This dunction updates the calculator screen with the contents of Display_Value
function Update_Display() {
    // Makes use of the calculator-screen class to target the 
    //input tag in the HTML document.
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //the target var is an object that represents the element
    // that was clicked.
    const { target } = event;
    //If the element was clicked on is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    // Ensures that AC clears all inputs from the Calculator screen.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})