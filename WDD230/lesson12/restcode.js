/* for chamberOfCommerce, I was trying to do the three day forecast for the actual day on different times.*/


/*================3 day forecast================*/
const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3903320&appid=fe9618ac2914a4fb6ae4a0b3b84bf461&units=imperial'
fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {    
    console.log(jsObject);
    const timeAt = ["00:00:00", "03:00:00", "06:00:00", "09:00:00", "12:00:00", "15:00:00", "18:00:00", "21:00:00"]
    
    const forThree = jsObject.list.filter((element) => //note the list property to filter.
      element.dt_txt.includes(`${actualDate}`)
      );

    
    let day = actualDate;
    for(let i=0; i < forThree.length; i++){
      let d = new Date(forThree[i].dt_txt);

      //for 5 days of week.
      document.querySelector("#dayOfWeek" + (day + 1)).textContent = timeAt[d.getDay()];
      
      //table images output with it's properties.
      const forecastimgsrc = `https://openweathermap.org/img/w/${forThree[day].weather[0].icon}.png`;
      const desc = forThree[day].weather[0].icon;
      document.getElementById("forecastimg" + (day + 1)).setAttribute('src', forecastimgsrc);
      document.getElementById("forecastimg" + (day + 1)).setAttribute('alt', desc);      
      
      //table temperature rows output
      document.querySelector("#temperature" + (day +1)).textContent = Math.round(forThree[day].main.temp);
      day++
    }
    
  });