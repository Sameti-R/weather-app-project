function dayFormat(timestamp) {
  now = new Date(timestamp);

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = weekDays[now.getDay(timestamp)];

  hours = now.getHours(timestamp);

  if (hours < 10) {
    hours = `0${hours}`;
  }
  minutes = now.getMinutes(timestamp);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return ` ${day}, ${hours}:${minutes}`;
}
function showWeather(response) {
  let cityName = document.querySelector("#the-city");

  cityName.innerHTML = `${response.data.name}`;

  let temperature = Math.round(response.data.main.temp);

  let temp = document.querySelector("#celcius");

  temp.innerHTML = `${temperature}`;
  let description = document.querySelector("#weather-condition");
  description.innerHTML = `${response.data.weather[0].description}`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}`;
  let wind = document.querySelector("#wind");
  let windSpeed = Math.round(response.data.wind.speed);
  wind.innerHTML = `${windSpeed}`;
  dayTime = document.querySelector("#day-time");
  dayTime.innerHTML = dayFormat(response.data.dt * 1000);
  let iconElement = document.querySelector("#weather-icon");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let apiKey = "a1181481ea4e88c11541b6fdfb74d7f4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}
function showCurrentData(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-engine");
  search(cityInputElement.value);
}

let form = document.querySelector("#my-form");
form.addEventListener("submit", showCurrentData);
