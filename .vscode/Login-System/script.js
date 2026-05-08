function login() {
    // Get values
    let username = document.getElementById("userName").value.trim();
    let password = document.getElementById("passWord").value;
    let messageElement = document.getElementById("message");
    
    // Check for empty fields FIRST
    if (username === "" || password === "") {
        messageElement.innerHTML = "⚠️ Please fill in all fields!";
        messageElement.className = "warning";
        return;
    }
    
    // Check credentials
    if (username === "Yonatan" && password === "yoni@123") {
        messageElement.innerHTML = "✅ Login successful! Redirecting...";
        messageElement.className = "success";
        
        // Simulate redirect after 1.5 seconds
        setTimeout(function() {
            alert("Welcome back, Yonatan! 🚀");
        }, 1500);
        
    } else {
        messageElement.innerHTML = "❌ Invalid username or password";
        messageElement.className = "error";
    }
}

// Press Enter to login
document.getElementById("passWord").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        login();
    }
});