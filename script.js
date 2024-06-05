let latitude = 41.6941100 ;
let longitude = 44.8336800;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,is_day,wind_speed_10m`;
let burger = document.querySelector(".burger-menu");
let navbarMenu = document.querySelector(".navbar-menu");
burger.addEventListener("click",function(){
  navbarMenu.classList.toggle("burger-none")
  
})
fetch(url).then((response) =>
  response.json().then((data) => {
    let weather2 = document.querySelector(".weather-img2");
    let temperature = document.querySelector(".temperature");
    temperature.textContent = `${data.current.temperature_2m}°`;
    let latitude1 = document.querySelector(".latitude");
    let longitude2 = document.querySelector(".longitude");
    latitude1.textContent = `Latitude: ${latitude}`;
    longitude2.textContent = `Longitude: ${longitude}`;
    let windSpeed = document.querySelector(".wind-speed2");
    windSpeed.textContent = `${data.current.wind_speed_10m} km/h`;
    let weather = document.querySelector(".weather-img");
    console.log(data);
    if (data.current.is_day === 1) {
      weather.src = "./Ellipse 30.png";
    } else {
      weather.src = "./Group 1248.png";
    }
    if (data.current.temperature_2m < -1) {
      weather2.src = "./snow.png";
    } else if (
      data.current.temperature_2m >= 0 &&
      data.current.temperature_2m <= 10
    ) {
      weather2.src = "./Group 1214.png";
    } else if (
      data.current.temperature_2m >= 11 &&
      data.current.temperature_2m <= 30
    ) {
      weather2.src = "./Union.png";
    } else if (data.current.temperature_2m >= 31) {
      weather2.src = "./Group 1231.png";
    }
  })
);

