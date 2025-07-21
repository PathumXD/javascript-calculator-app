// Project: javascript-calculator-app
// Author: PathumXD
// GitHub: https://github.com/PathumXD/javascript-calculator-app

const currentDisplay = document.getElementById("resultDisplay");

function adjustFontSize() {
    let currentText = currentDisplay.innerText;
    let baseFontSize = 2;

    currentDisplay.style.fontSize = baseFontSize + 'rem';

    while (currentDisplay.scrollWidth > currentDisplay.clientWidth && baseFontSize > 0.8) {
        baseFontSize -= 0.1;
        currentDisplay.style.fontSize = baseFontSize + 'rem';
    }
}

function addNumber(num) {
    if (currentDisplay.innerText === "0") {
        currentDisplay.innerText = num;
    } else {
        currentDisplay.innerText += num;
    }
    adjustFontSize();
}

function appendOperation(operator) {
    const lastChar = currentDisplay.innerText.slice(-1);
    const operators = ['+', '-', '*', '/', '**'];

    if (operators.includes(lastChar) && operators.includes(operator) && operator !== '**') {
        currentDisplay.innerText = currentDisplay.innerText.slice(0, -1) + operator;
    } else {
        currentDisplay.innerText += operator;
    }
    adjustFontSize();
}

function clearAll() {
    currentDisplay.innerText = "0";
    currentDisplay.style.fontSize = '2rem';
}

function deleteLastChar() {
    if (currentDisplay.innerText.length === 1) {
        currentDisplay.innerText = "0";
    } else {
        currentDisplay.innerText = currentDisplay.innerText.slice(0, -1);
    }
    adjustFontSize();
}

function performCalculation() {
    try {
        let expression = currentDisplay.innerText;

        if (expression.includes('/0') && !expression.includes('/0.')) {
            currentDisplay.innerText = "Error";
            adjustFontSize();
            return;
        }

        let result = eval(expression);
        if (Number.isFinite(result)) {
            currentDisplay.innerText = result;
        } else {
            currentDisplay.innerText = "Error";
        }
    } catch (e) {
        currentDisplay.innerText = "Error";
    }
    adjustFontSize();
}

function calculateSquareRoot() {
    try {
        let value = eval(currentDisplay.innerText);
        if (value < 0) {
            currentDisplay.innerText = "Error";
        } else {
            currentDisplay.innerText = Math.sqrt(value);
        }
    } catch (e) {
        currentDisplay.innerText = "Error";
    }
    adjustFontSize();
}