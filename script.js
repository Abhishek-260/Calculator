
// const apiKey = 'b61c77c0ef3af7e84e27abd696cf09a3';

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click", () => {
    let city = input.value;
    getWeather(city);
})

function getWeather(city){
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'b61c77c0ef3af7e84e27abd696cf09a3'}`).
    then(response=>response.json()).then(data => {console.log(data);

    const weatherCity = data.name;
    const weatherCountry = data.sys.country;
    weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

    let weatherTemp = data.main.temp;
    weatherTemp = weatherTemp -273;
    const temp = weatherTemp.toFixed(2)
    temperature.innerHTML = `${temp} C`;

    const desc = data.weather[0].description;
    description.innerHTML = `${desc}`


    }
    )
}