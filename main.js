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
})
document.addEventListener("DOMContentLoaded", () => {
    const catButton = document.getElementById("catButton");
    const catImage = document.getElementById("catImage");

    catButton.addEventListener("click", async () => {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            if (!response.ok) {
                throw new Error("Failed to fetch cat image");
            }

            const data = await response.json();
            const imageUrl = data[0].url;

            catImage.src = imageUrl;
            catImage.alt = "A cute cat picture";
        } catch (error) {
            console.error("Error fetching cat image:", error);
            alert("Sorry, couldn't fetch a cat picture. Please try again!");
        }
    });
});