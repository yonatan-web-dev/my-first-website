 function login() {
        let username = document.getElementById("userName").value.trim();  // .trim() removes spaces
        let password = document.getElementById("passWord").value;
        let messageElement = document.getElementById("message");
        
        // 1. Check for empty fields FIRST (Most important validation)
        if (username === "" || password === "") {
            messageElement.innerHTML = "⚠️ Please fill in all fields!";
            messageElement.className = "warning";  // Apply CSS class
            return;  // Stop execution
        }
        
        // 2. Check credentials
        if (username === "Yonatan" && password === "yoni@123") {
            messageElement.innerHTML = "✅ Login successful! Redirecting...";
            messageElement.className = "success";
            
            // Bonus: Simulate redirect after 1.5 seconds
            setTimeout(function() {
                alert("Welcome back, Yonatan! 🚀");
            }, 1500);
            
        } else {
            messageElement.innerHTML = "❌ Invalid username or password";
            messageElement.className = "error";
        }
    }
    
    // BONUS: Press Enter to login
    document.getElementById("passWord").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            login();
        }
    });