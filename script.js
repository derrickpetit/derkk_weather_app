// const apikey='acb159b6d7cf1e0af93693e4c9b1d7ec';
// const apiUrl ='https//api.openweathermap.org/data/2.5/weather';

// const loctionInput = document.getElementById('locationInput')
// const searchbutton = document.getElementById('searchbutton')
// const locationElement = document.getElementById('location')
// const temp = document.getElementById('temp')
// const decriptionElemt = document.getElementById('description')

// searchButton .addEventLIstener('click', () =>{
//     const location = locationInput.value;
//     if (location) {
//         fetchWeather(location);
//     }
// });
// function fetchweather(location) {
//     const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             locationElement.textContent=data.name;
//             temperatureElement.textContent=`${Math.round(data.main.temp)}`
//         })
//         .catch(error => {
//             console.error('Error fetching weather data', error);

//         });
// } 

const apiKey = 'acb159b6d7cf1e0af93693e4c9b1d7ec';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';


const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');


searchButton.addEventListener('click', () =>{
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});
function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);

        });
}