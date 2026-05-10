// ====== LOGIN FUNCTION ======
function login() {
    let username = document.getElementById("userName").value.trim();
    let password = document.getElementById("passWord").value;
    let messageElement = document.getElementById("message");
    
    // Clear previous message style
    messageElement.className = "";
    
    // Check for empty fields
    if (username === "" || password === "") {
        messageElement.innerHTML = "⚠️ Please fill in all fields!";
        messageElement.className = "warning";
        return;
    }
    
    // Check credentials
    if (username === "Yonatan" && password === "yoni@123") {
        messageElement.innerHTML = "✅ Login successful! Welcome back! 🚀";
        messageElement.className = "success";
    } else {
        messageElement.innerHTML = "❌ Invalid username or password!";
        messageElement.className = "error";
    }
}

// ====== ENTER KEY TO LOGIN ======
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});