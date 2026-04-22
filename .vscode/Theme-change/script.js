function toggleTheme() {
    // Get the body element
    let body = document.body;
    let button = document.getElementById("themeToggle");
    
    // Check if dark-mode class exists
    if (body.className === "dark-mode") {
        // Switch to Light Mode
        body.className = "";  // Remove the class
        button.innerHTML = "🌙 Switch to Dark Mode";
        
        // Optional: Save preference
        localStorage.setItem("theme", "light");
        
    } else {
        // Switch to Dark Mode
        body.className = "dark-mode";  // ADD the class
        button.innerHTML = "☀️ Switch to Light Mode";
        
        // Optional: Save preference
        localStorage.setItem("theme", "dark");
    }
}

// BONUS: Remember user's preference when they return
function loadSavedTheme() {
    let savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
        document.body.className = "dark-mode";
        document.getElementById("themeToggle").innerHTML = "☀️ Switch to Light Mode";
    }
}

// Run when page loads
window.onload = loadSavedTheme;