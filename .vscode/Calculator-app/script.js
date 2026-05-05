// ====== PRESS BUTTON ======
function press(value) {
    let display = document.getElementById("display");
    display.value = display.value + value;
}

// ====== CALCULATE ======
function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    
    // Prevent empty calculation
    if (expression === "") {
        return;
    }
    
    try {
        let result = eval(expression);
        
        // Handle division by zero
        if (result === Infinity || result === -Infinity) {
            display.value = "Error";
            return;
        }
        
        // Format result
        if (Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = parseFloat(result.toFixed(4));
        }
        
    } catch (error) {
        display.value = "Error";
    }
}

// ====== CLEAR DISPLAY ======
function clearDisplay() {
    document.getElementById("display").value = "";
}

// ====== BACKSPACE ======
function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// ====== KEYBOARD SUPPORT ======
document.addEventListener("keydown", function(event) {
    let key = event.key;
    
    // Prevent default for calculator keys
    if (!isNaN(key) || "+-*/.%".includes(key)) {
        event.preventDefault();
        press(key);
    } else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        event.preventDefault();
        backspace();
    } else if (key === "Escape") {
        event.preventDefault();
        clearDisplay();
    }
});