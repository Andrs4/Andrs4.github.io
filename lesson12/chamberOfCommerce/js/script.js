const d = new Date();
const actualDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

window.addEventListener('load', (event)=>{

    const update = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-us', update);

});

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
}

/*==== Tries to change the background color for the header when scrolling down ====*/
/*function addingBackground() {
    document.getElementsByClassName("top").classList.toggle("has-background");
    window.onmouseover = () => {
        if (window.innerHeight < 50) mainnav.classList.remove("has-background")
    };
}*/


/*==== Add a upcoming event to the page ====*/
window.onload = function toggleEvents() {
    let day = new Date();
    let actual = day.getDate();
    /*==== is tried to check for friday and if it's not it should hide the aside element=====*/
    if (actual >= 11) {    
        document.getElementById("elections").classList.toggle("hide");
    }
}


/* ============= Summary API data getting ========================*/
// set the JSON source URL
const apiURL =   "https://api.openweathermap.org/data/2.5/weather?id=3903320&units=imperial&appid=fe9618ac2914a4fb6ae4a0b3b84bf461";

fetch(apiURL) 
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      /*================weather summary================*/
    /*select all the summary elements needed*/
    let currentTemp = document.querySelector("#currentTemp") 
    let current = document.querySelector("#current");
    let humidity = document.querySelector("#humidity");

    
    /*setting new data, from openweathermap database*/
    currentTemp.textContent = jsObject.main.temp;
    current.textContent= jsObject.weather[0].main;
    humidity.textContent= jsObject.main.humidity;
    high.textContent= jsObject.main.temp_max;

  });

/*================3 day forecast================*/
const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3903320&appid=fe9618ac2914a4fb6ae4a0b3b84bf461&units=imperial'
fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {    
    console.log(jsObject);
    const dayAt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    
    const forThree = jsObject.list.filter((element) => //note the list property to filter.
      element.dt_txt.includes(`18:00:00`)
      );

      
    let day = 0;
    for(let i=0; i < forThree.length; i++){
      let d = new Date(forThree[i].dt_txt);

      //for 5 days of week.
      document.querySelector("#dayOfWeek" + (day + 1)).textContent = dayAt[d.getDay()];
      
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