export function isValidNumber(value) {
    return !isNaN(value) && value !== "";
}

export function handleError(result) {
    if (result === "Error") {
        alert("Cannot divide by zero");
        return true;
    }
    return false;
}
