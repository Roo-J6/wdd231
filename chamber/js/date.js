// Set the current year dynamically in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set the last modified date dynamically in the footer
document.getElementById('lastModified').textContent = 
    "Last Updated: " + document.lastModified;
