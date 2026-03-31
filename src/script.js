import { add, subtract } from './addSub.js';
import { multiply, divide } from './mulDiv.js';
import { isValidNumber, handleError } from './validation.js';

let currentInput = "";
let operator = "";
let firstValue = "";

// Append number or decimal
function appendNumber(num) {
    // Prevent multiple decimals
    if (num === '.' && currentInput.includes('.')) return;

    currentInput += num;
    document.getElementById("display").value = currentInput;
}

// Set operation (+, -, *, /)
function setOperation(op) {
    // If no input, do nothing (no annoying alert)
    if (!currentInput) return;

    firstValue = currentInput;
    operator = op;
    currentInput = "";
}

// Perform calculation
function calculate() {
    // If something missing, just ignore instead of error
    if (!operator || !currentInput || !firstValue) return;

    let a = parseFloat(firstValue);
    let b = parseFloat(currentInput);

    if (!isValidNumber(a) || !isValidNumber(b)) {
        alert("Invalid input");
        return;
    }

    let result;

    switch (operator) {
        case '+': result = add(a, b); break;
        case '-': result = subtract(a, b); break;
        case '*': result = multiply(a, b); break;
        case '/': result = divide(a, b); break;
        default: return;
    }

    if (handleError(result)) return;

    document.getElementById("display").value = result;

    // Allow chaining calculations
    currentInput = result.toString();
    operator = "";
    firstValue = "";
}

// Clear display
function clearDisplay() {
    currentInput = "";
    firstValue = "";
    operator = "";
    document.getElementById("display").value = "";
}

// ✅ Make functions accessible in HTML
window.appendNumber = appendNumber;
window.setOperation = setOperation;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
