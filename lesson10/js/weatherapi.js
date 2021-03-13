const weatherAPId = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=fe9618ac2914a4fb6ae4a0b3b84bf461&units=imperial' ;

fetch(weatherAPId) 
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);        
        const temperature = document.querySelector('#current-temp');
        temperature.textContent = jsObject.list[0].main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);

    
    
    });
