// ====== STORE DATA ======
let history = [];
let memory = 0;

// ====== PRESS BUTTON ======
function press(value) {
    let display = document.getElementById("display");
    display.value = display.value + value;
}

// ====== CALCULATE ======
function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    
    if (expression === "") {
        return;
    }
    
    try {
        let result = eval(expression);
        
        if (result === Infinity || result === -Infinity) {
            display.value = "Error";
            return;
        }
        
        let formattedResult;
        if (Number.isInteger(result)) {
            formattedResult = result;
        } else {
            formattedResult = parseFloat(result.toFixed(4));
        }
        
        // Save to history
        let entry = {
            expression: expression,
            result: formattedResult
        };
        history.push(entry);
        
        display.value = formattedResult;
        displayHistory();
        
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

// ====== MEMORY FUNCTIONS ======
function memoryClear() {
    memory = 0;
    updateMemoryDisplay();
}

function memoryRecall() {
    document.getElementById("display").value = memory;
}

function memoryAdd() {
    let display = document.getElementById("display");
    let currentValue = Number(display.value);
    
    if (!isNaN(currentValue) && display.value !== "") {
        memory = memory + currentValue;
        updateMemoryDisplay();
        display.value = "";
    }
}

function memorySubtract() {
    let display = document.getElementById("display");
    let currentValue = Number(display.value);
    
    if (!isNaN(currentValue) && display.value !== "") {
        memory = memory - currentValue;
        updateMemoryDisplay();
        display.value = "";
    }
}

function updateMemoryDisplay() {
    document.getElementById("memoryDisplay").innerHTML = "M: " + memory;
}

// ====== DISPLAY HISTORY ======
function displayHistory() {
    let historyList = document.getElementById("historyList");
    let html = "";
    
    if (history.length === 0) {
        html = '<p class="no-history">No calculations yet</p>';
    } else {
        for (let i = history.length - 1; i >= 0; i--) {
            html = html + '<div class="history-item">' +
                   '<span class="history-expression">' + history[i].expression + ' =</span>' +
                   '<span class="history-result">' + history[i].result + '</span>' +
                   '</div>';
        }
    }
    
    historyList.innerHTML = html;
}

// ====== CLEAR HISTORY ======
function clearHistory() {
    history = [];
    displayHistory();
}

// ====== KEYBOARD SUPPORT ======
document.addEventListener("keydown", function(event) {
    let key = event.key;
    
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