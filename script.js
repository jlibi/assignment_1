function getNumbers() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    return [Number(first), Number(second)];
}

function updateOutput(result) {
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = "Result: " + result;
    if (result < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "darkslategray";
    }
}

function addition() {
    let [first, second] = getNumbers();
    updateOutput(first + second);
}

function subtraction() {
    let [first, second] = getNumbers();
    updateOutput(first - second);
}

function multiplication() {
    let [first, second] = getNumbers();
    updateOutput(first * second);
}

function division() {
    let [first, second] = getNumbers();
    if (second === 0) {
        updateOutput("Error: Cannot divide by zero");
        return;
    }
    updateOutput(first / second);
}

function power() {
    let [base, exponent] = getNumbers();
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    updateOutput(result);
}

function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "Result: ";
    document.getElementById("output").style.color = "gray";
}


