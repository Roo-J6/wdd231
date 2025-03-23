// 🔹 Fetch and display weather data from OpenWeatherMap API
const apiKey = 'a0a823a6b604602a6b5e5bd59b6ccaea'; // Replace with your OpenWeatherMap API key
const citylocation = 'Lagos,NG';  // Replace with your chamber location (City, Country Code)

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citylocation}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error(`Weather API error: ${response.statusText}`);

        const data = await response.json();
        
        // Round temperature and capitalize weather descriptions
        const temp = Math.round(data.main.temp);
        const descriptions = data.weather
            .map(event => event.description
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            ).join(', ');

        document.getElementById('weather-today').innerHTML = `
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Condition:</strong> ${descriptions}</p>
        `;

        fetchForecast(); // Fetch 3-day forecast
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById('weather-today').innerHTML = '<p>Weather data unavailable.</p>';
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citylocation}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error(`Forecast API error: ${response.statusText}`);

        const data = await response.json();

        const forecastHTML = data.list
            .filter(item => item.dt_txt.includes('12:00:00'))
            .slice(0, 3)
            .map(item => {
                const date = new Date(item.dt * 1000).toLocaleDateString();
                const temp = Math.round(item.main.temp);
                return `<div class="forecast-item">
                            <h4>${date}</h4>
                            <p>Temp: ${temp}°C</p>
                        </div>`;
            }).join('');

        document.getElementById('weather-forecast').innerHTML = forecastHTML;
    } catch (error) {
        console.error('Error fetching forecast:', error);
        document.getElementById('weather-forecast').innerHTML = '<p>Forecast data unavailable.</p>';
    }
}

// 🔹 Fetch and display Chamber Member Spotlights
async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json'); // Ensure the correct path to your JSON file
        if (!response.ok) throw new Error(`Spotlights JSON error: ${response.statusText}`);

        const data = await response.json();

        // Filter only Gold (3) and Silver (2) members
        const goldSilverMembers = data.members.filter(member => member.membership === 3 || member.membership === 2);

        // Randomly pick up to 3 spotlights
        const spotlights = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Generate HTML for the spotlights
        const spotlightHTML = spotlights.map(member => `
            <div class="spotlight-card">
                <img src="images/${member.image}" alt="${member.name} Logo" onerror="this.src='images/default.png';">
                <h3>${member.name}</h3>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p><strong>Membership:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
            </div>
        `).join('');

        document.querySelector('.spotlight-container').innerHTML = spotlightHTML;
    } catch (error) {
        console.error('Error loading spotlights:', error);
        document.querySelector('.spotlight-container').innerHTML = '<p>Spotlight members unavailable.</p>';
    }
}

// Run the functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    loadSpotlights();
});
