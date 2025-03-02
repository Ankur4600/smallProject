const fetchWeatherData = async (city)=>{
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},in&units=metric&appid=3652db7621706eff30cbf46e22107134`);
  let data = await response.json();
  console.log(data);
  let weatherData = document.querySelector('#weather-data')
  weatherData.innerHTML = `
  <div class="icon">
          <img
            src="https://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@2x.png"
            alt="Weather Icon"
          />
        </div>
        <div class="temperature">${Math.round(data.main.temp)}<sup>o</sup>C</div>
        <div class="description">${data.weather[0].description}</div>
        <div class="details">
          <div>Feels like: ${Math.round(data.main.feels_like)}°C</div>
          <div>Humidity: ${Math.round(data.main.humidity)}%</div>
          <div>Wind speed: ${Math.round(data.wind.speed)}m/s</div>
        </div>
  `
  
}
let weatherForm = document.querySelector('#weather-form')
weatherForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  let cityInput = document.querySelector('#city-input').value
  fetchWeatherData(cityInput)

})