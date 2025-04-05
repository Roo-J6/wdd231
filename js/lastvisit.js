// Get the current date in milliseconds
const now = Date.now();

// Retrieve the last visit timestamp from localStorage
const lastVisit = localStorage.getItem("lastVisit");

// Select the element where the message will be displayed
const messageContainer = document.getElementById("visit-message");

// Helper function to get a Date object without time (at midnight)
function getDateOnly(ms) {
    const date = new Date(ms);
    date.setHours(0, 0, 0, 0);  
    return date;
}

// Helper function to calculate difference in hours
function getTimeDifferenceInHours(current, last) {
    const diffInTime = current - last;
    return Math.floor(diffInTime / (1000 * 60 * 60));  
}

console.log("Current time:", now);           
console.log("Last visit time:", lastVisit);  

if (!lastVisit) {
    // First-time visitor
    console.log("First-time visit detected.");
    messageContainer.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate time difference based on the date part only
    const currentDate = getDateOnly(now);
    const lastVisitDate = getDateOnly(parseInt(lastVisit));

    console.log("Current date:", currentDate);       
    console.log("Last visit date:", lastVisitDate);   

    // Check if the current date is the same as the last visit date
    const differenceInTime = currentDate.getTime() - lastVisitDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    const differenceInHours = getTimeDifferenceInHours(now, parseInt(lastVisit));

    console.log(`Difference in time: ${differenceInTime} ms`);  
    console.log(`Difference in days: ${differenceInDays} days`);  
    console.log(`Difference in hours: ${differenceInHours} hours`); 

    if (differenceInDays < 1) {
        // If the time difference is less than 1 day, but more than 0 hours
        if (differenceInHours < 2) {  // Within 2 hours
            messageContainer.textContent = "Back so soon! Awesome!";
        } else {
            messageContainer.textContent = `You last visited today at ${new Date(parseInt(lastVisit)).toLocaleTimeString()}.`;
        }
    } else {
        messageContainer.textContent = `You last visited ${differenceInDays} day${differenceInDays === 1 ? '' : 's'} ago.`;
    }
}

localStorage.setItem("lastVisit", now);
console.log("Visit timestamp updated:", now); 
