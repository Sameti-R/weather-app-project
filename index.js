function dayFormat(timestamp) {
  now = new Date(timestamp);
  console.log(now);
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
  console.log(day);
  hours = now.getHours(timestamp);
  console.log(hours);
  minutes = now.getMinutes(timestamp);
  console.log(minutes);
  return `Last updated: ${day}, ${hours}:${minutes}`;
}
function showWeather(response) {
  console.log(response.data);
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
}
let apiKey = "a1181481ea4e88c11541b6fdfb74d7f4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showWeather);
