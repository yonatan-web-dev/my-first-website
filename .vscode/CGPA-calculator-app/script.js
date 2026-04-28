// ====== STORE COURSES ======
let courses = [];

// ====== ADD COURSE ======
function addCourse() {
    // Get values
    let name = document.getElementById("courseName").value;
    let credit = document.getElementById("creditHour").value;
    let gradePoint = document.getElementById("gradeSelect").value;
    let gradeText = document.getElementById("gradeSelect").options[document.getElementById("gradeSelect").selectedIndex].text;
    
    // ====== VALIDATION ======
    if (name === "") {
        alert("⚠️ Please enter course name!");
        return;
    }
    
    if (credit === "") {
        alert("⚠️ Please enter credit hours!");
        return;
    }
    
    if (gradePoint === "") {
        alert("⚠️ Please select a grade!");
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
}

// ====== CALCULATE CGPA ======
function calculateCGPA() {
    // ====== VALIDATION ======
    if (courses.length === 0) {
        alert("⚠️ Please add at least one course!");
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
}