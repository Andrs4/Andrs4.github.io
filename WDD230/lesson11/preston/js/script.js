const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
  img.removeAttribute("data-src");
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 200px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});


/* ============= Brother Blazzar function for range rating==============*/
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

/* ============= Summary API data getting ========================*/
// set the JSON source URL
const apiURL =   "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=fe9618ac2914a4fb6ae4a0b3b84bf461";

fetch(apiURL) 
    .then((response) => response.json())
    .then((jsObject) => {
      //console.log(jsObject);
      /*================weather summary================*/
    /*select all the summary elements needed*/
    let current = document.querySelector("#current");
    let high = document.querySelector("#high");
    let windChill = document.querySelector("#wind-chill");
    let humidity = document.querySelector("#humidity");
    let speed = document.querySelector("#speed");
    
    /*setting new data, from openweathermap database*/
    current.textContent= jsObject.weather[0].main;
    high.textContent= jsObject.main.temp_max;
    //Calculating windChill with real data.
    let temp = 35.46;//jsObject.main.temp;
    let wspeed = 4.9;//jsObject.wind.speed;
    
    if (temp <= 50 && wspeed >= 3){
      let wChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wspeed, 0.16) + 0.4275 * temp * Math.pow(wspeed, 0.16);
      windChill.innerHTML= Math.round(wChill);
      
      humidity.textContent= jsObject.main.humidity;
      speed.textContent= jsObject.wind.speed;
    }
    else {
      wChill = "N/A";
      windChill.innerHTML = wChill;
    }  
  });

/*================5 day forecast================*/
const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=fe9618ac2914a4fb6ae4a0b3b84bf461&units=imperial'
fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {    
    //console.log(jsObject);
    const dayAt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    
    const forFive = jsObject.list.filter((element) => //note the list property to filter.
      element.dt_txt.includes("18:00:00")
      );

      
    let day = 0;
    for(let i=0; i < forFive.length; i++){
      let d = new Date(forFive[i].dt_txt);

      //for 5 days of week.
      document.querySelector("#dayOfWeek" + (day + 1)).textContent = dayAt[d.getDay()];
      
      //table images output with it's properties.
      const forecastimgsrc = `https://openweathermap.org/img/w/${forFive[day].weather[0].icon}.png`;
      const desc = forFive[day].weather[0].icon;
      document.getElementById("forecastimg" + (day + 1)).setAttribute('src', forecastimgsrc);
      document.getElementById("forecastimg" + (day + 1)).setAttribute('alt', desc);      
      
      //table temperature rows output
      document.querySelector("#temperature" + (day +1)).textContent = Math.round(forFive[day].main.temp);
      day++
    }
    
  });

/*================= Upcoming Events ================*/
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.log(jsonObject);
    const towns = jsonObject['towns'];

    const upcoming = document.querySelector(".upcoming-events");
    towns.forEach( town => {
      //console.log(town.name)
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let upcomdiv = document.createElement("div")

      if (town.name == "Preston") {
        p1.textContent = `${town.events[0]}`;
        p2.textContent = `${town.events[1]}`;
        p3.textContent = `${town.events[2]}`;

        upcomdiv.append(p1);
        upcomdiv.append(p2);
        upcomdiv.append(p3);

        upcoming.append(upcomdiv);
      }
    });
  });