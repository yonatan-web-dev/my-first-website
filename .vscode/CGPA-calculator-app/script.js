let courses = [];

function addCourse() {
    let name = document.getElementById("courseName").value;
    let credit = document.getElementById("creditHour").value;
    let gradePoint = document.getElementById("gradeSelect").value;
    let gradeText = document.getElementById("gradeSelect").options[document.getElementById("gradeSelect").selectedIndex].text;
    
    // Create an object
    let course = {
        name: name,
        credit: Number(credit),
        gradePoint: Number(gradePoint),
        grade: gradeText
    };
    
    courses.push(course);
    
    // Clear inputs
    document.getElementById("courseName").value = "";
    document.getElementById("creditHour").value = "";
    document.getElementById("gradeSelect").value = "";
    
    displayCourses();
}

function displayCourses() {
    let listDiv = document.getElementById("courseList");
    let html = "";
    
    for (let i = 0; i < courses.length; i++) {
        html = html + '<div class="course-item">' +
               '<span>' + courses[i].name + ' (' + courses[i].credit + 'hr)</span>' +
               '<span>' + courses[i].grade + '</span>' +
               '</div>';
    }
    
    listDiv.innerHTML = html;
}