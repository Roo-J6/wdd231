document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Update: " + document.lastModified;

const courses = [
    { code: "CSE 110", category: "CSE", completed: true },
    { code: "WDD 130", category: "WDD", completed: true },
    { code: "CSE 111", category: "CSE", completed: false },
    { code: "CSE 210", category: "CSE", completed: false },
    { code: "WDD 131", category: "WDD", completed: true },
    { code: "WDD 231", category: "WDD", completed: false }
];

function displayCourses(filteredCourses) {
    const container = document.getElementById('course-container');
    container.innerHTML = "";
    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.textContent = course.code;
        courseDiv.classList.add('course');
        if (course.completed) {
            courseDiv.style.backgroundColor = "#6b4226";
            courseDiv.style.color = "white";
        }
        container.appendChild(courseDiv);
    });
}

displayCourses(courses);

function filterCourses(category) {
    if (category === 'all') {
        displayCourses(courses);
    } else {
        displayCourses(courses.filter(course => course.category === category));
    }
}
