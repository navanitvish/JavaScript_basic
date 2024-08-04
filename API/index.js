console.log("hello jee navanit");
const API_KEY = "110100eb82d9aa53665a3096f93e4931";
async function showweather() {
  let city = "goa";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  console.log("weather data:->", data);
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
  document.body.appendChild(newPara);
}

async function getrandomWeather() {
  try {
    let latitude = 16.6333;
    let longitude = 18.3333;

    let result = await fetch(
      `https://api.openweathemap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    let data = await result.json();
    console.log(data);
  } catch (err) {
    console.log("Erroe Found ", err);
  }
}
