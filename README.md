<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Personal Homepage for Web Development Course">
    <meta name="author" content="Your Name">
    <title>My Homepage</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <img src="profile.jpg" alt="Profile Picture">
        <span>Your Name</span>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Chamber</a></li>
            <li><a href="#">GitHub Profile</a></li>
            <li><a href="#">LinkedIn</a></li>
        </ul>
    </nav>
    <main>
        <h1>Home</h1>
        <section>
            <h2>About Me</h2>
            <p>Brief introduction about yourself.</p>
        </section>
        <section>
            <h2>Courses</h2>
            <div id="course-list"></div>
            <button onclick="filterCourses('all')">All Courses</button>
            <button onclick="filterCourses('WDD')">WDD Courses</button>
            <button onclick="filterCourses('CSE')">CSE Courses</button>
            <p>Total Credits: <span id="total-credits">0</span></p>
        </section>
    </main>
    <footer>
        <p>&copy; <span id="year"></span> Your Name, Your Country</p>
        <p id="lastModified"></p>
    </footer>
</body>
</html>
