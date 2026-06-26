function WelcomeUser() {
    let name = document.getElementById("userName").value;
    document.getElementById("WelcomeMsg").innerHTML = "Authentication successful, " + name + ".";
}

function changeText() {
    document.getElementById("demo").innerHTML = "DOM state modified via script.";
}

function UpgradeGoal() {
    let goal = document.getElementById("goal");
    goal.innerHTML = "Goal Updated: CEO of technology firm.";
    goal.style.color = "var(--accent-color)";
    goal.style.fontWeight = "bold";
}