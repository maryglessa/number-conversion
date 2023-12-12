let display = document.getElementById('display');
let expression = '';
let mode = 'decimal'; // Default mode

function setMode(newMode) {
    // Enable all buttons first
    enableAllButtons();

    // Update mode
    mode = newMode;

    // Disable buttons based on the selected mode
    if (mode === 'binary') {
        disableButtons(['btn-2', 'btn-3', 'btn-4', 'btn-5', 'btn-6', 'btn-7', 'btn-8', 'btn-9', 'btn-A', 'btn-B', 'btn-C', 'btn-D', 'btn-E', 'btn-F']);
    } else if (mode === 'decimal') {
        disableButtons (['btn-A', 'btn-B', 'btn-C', 'btn-D', 'btn-E', 'btn-F']);
    } else if (mode === 'octal') {
        disableButtons(['btn-8', 'btn-9', 'btn-A', 'btn-B', 'btn-C', 'btn-D', 'btn-E', 'btn-F']);
    } else if (mode === 'hexadecimal') {
        // No need to disable any buttons for hexadecimal
    }
}

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculate() {
    try {
        // Parse the expression based on the selected mode
        let result;
        if (mode === 'binary') {
            result = parseInt(expression, 2);
        } else if (mode === 'decimal') {
            result = parseInt(expression, 10);
        } else if (mode === 'octal') {
            result = parseInt(expression, 8);
        } else if (mode === 'hexadecimal') {
            result = parseInt(expression, 16);
        }

        display.value = result.toString(16).toUpperCase(); // Display result in hexadecimal
    } catch (error) {
        display.value = 'Error';
    }
}

function disableButtons(buttonIds) {
    // Disable specified buttons
    buttonIds.forEach(id => {
        document.getElementById(id).disabled = true;
    });
}

function enableAllButtons() {
    // Enable all buttons
    for (let i = 0; i <= 15; i++) {
        let hexButtonId = 'btn-' + i.toString(16).toUpperCase();
        document.getElementById(hexButtonId).disabled = false;
    }
}

function calculate() {
    try {
        let result;
        if (mode === 'binary') {
            result = parseInt(expression, 2);
            display.value = `HEX: ${result.toString(16).toUpperCase()}\n\n DEC: ${result.toString(10)}\n OCT: ${result.toString(8)}\n `;
        } else if (mode === 'decimal') {
            result = parseInt(expression, 10);
            display.value = `HEX: ${result.toString(16).toUpperCase()}\n\n OCT: ${result.toString(8)}\nBIN: ${result.toString(2)} \n`;
        } else if (mode === 'octal') {
            result = parseInt(expression, 8);
            display.value = `HEX: ${result.toString(16).toUpperCase()}\nDEC: ${result.toString(10)}\n\nBIN: ${result.toString(2)} \n`;
        } else if (mode === 'hexadecimal') {
            result = parseInt(expression, 16);
            display.value = `DEC: ${result.toString(10)}\nOCT: ${result.toString(8)}\nBIN: ${result.toString(2)} \n`;
        }
    } catch (error) {
        display.value = 'Error';
    }
}