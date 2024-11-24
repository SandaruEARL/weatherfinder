const apiKey = "your_openweathermap_api_key";

function fetchWeather() {
    const city = document.getElementById("cityInput").value;
    const url = `http://127.0.0.1:5000/api/weather?city=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
                document.getElementById("weatherDisplay").innerHTML = weatherHTML;
            } else {
                document.getElementById("weatherDisplay").innerHTML = "<p>City not found!</p>";
            }
        })
        .catch(err => console.error(err));
}
