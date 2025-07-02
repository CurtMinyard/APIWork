document.querySelector('button').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((rawResponse) => {
            return rawResponse.json();
        })
        .then((data) => {
            document.querySelector('img').src = data.message;
        });
});
document.getElementById('checkWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    fetch(`https://goweather.herokuapp.com/weather/${city}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = data.temperature || "N/A";
            document.getElementById('wind').textContent = data.wind || "N/A";
            document.getElementById('description').textContent = data.description || "N/A";
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            alert("Unable to fetch weather. Please try again later.");
        });
});