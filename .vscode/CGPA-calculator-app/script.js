// ====== STORE COURSES ======
let courses = [];

// ====== ADD COURSE ======
function addCourse() {
    // Get values
    let name = document.getElementById("courseName").value;
    let credit = document.getElementById("creditHour").value;
    let gradePoint = document.getElementById("gradeSelect").value;
    let gradeText = document.getElementById("gradeSelect").options[document.getElementById("gradeSelect").selectedIndex].text;
    
    // ====== VALIDATION WITH ON-SCREEN MESSAGE ======
    if (name === "") {
        showMessage("⚠️ Please enter course name!", "error");
        return;
    }
    
    if (credit === "") {
        showMessage("⚠️ Please enter credit hours!", "error");
        return;
    }
    
    if (gradePoint === "") {
        showMessage("⚠️ Please select a grade!", "error");
        return;
    }
    
    // Create course object
    let course = {
        name: name,
        credit: Number(credit),
        gradePoint: Number(gradePoint),
        grade: gradeText
    };
    
    // Add to array
    courses.push(course);
    
    // Clear inputs
    document.getElementById("courseName").value = "";
    document.getElementById("creditHour").value = "";
    document.getElementById("gradeSelect").value = "";
    
    // Update display
    displayCourses();
    
    // Success message
    showMessage("✅ Course added successfully!", "success");
}

// ====== DISPLAY COURSES ======
function displayCourses() {
    let listDiv = document.getElementById("courseList");
    let html = "";
    
    for (let i = 0; i < courses.length; i++) {
        html = html + '<div class="course-item">' +
               '<span>' + courses[i].name + ' (' + courses[i].credit + 'hr) - ' + courses[i].grade + '</span>' +
               '<button class="delete-btn" onclick="deleteCourse(' + i + ')">Delete</button>' +
               '</div>';
    }
    
    listDiv.innerHTML = html;
}

// ====== DELETE COURSE ======
function deleteCourse(index) {
    courses.splice(index, 1);
    displayCourses();
    showMessage("🗑️ Course deleted!", "success");
}

// ====== CALCULATE CGPA ======
function calculateCGPA() {
    if (courses.length === 0) {
        showMessage("⚠️ Please add at least one course!", "error");
        return;
    }
    
    let totalPoints = 0;
    let totalCredits = 0;
    
    for (let i = 0; i < courses.length; i++) {
        totalPoints = totalPoints + (courses[i].gradePoint * courses[i].credit);
        totalCredits = totalCredits + courses[i].credit;
    }
    
    let gpa = totalPoints / totalCredits;
    
    document.getElementById("result").innerHTML = "Your CGPA: " + gpa.toFixed(2);
    showMessage("🎓 CGPA calculated!", "success");
}

// ====== SHOW MESSAGE ======
function showMessage(text, type) {
    let messageElement = document.getElementById("message");
    messageElement.innerHTML = text;
    messageElement.className = type + "-msg";  // "error-msg" or "success-msg"
    
    // Clear message after 3 seconds
    setTimeout(function() {
        messageElement.innerHTML = "";
        messageElement.className = "";
    }, 3000);
}