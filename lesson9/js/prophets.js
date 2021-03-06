// set the JSON source URL
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];

        const cards = document.querySelector(".cards")
        // select output location
        prophets.forEach(prophet => {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let prophetimg = document.createElement("img");
            
            // template literals
            h2.textContent = `${prophet.name} ${prophet.lastname}`;
            p1.textContent = `Date of Birth: ${prophet.birthdate}`;
            p2.textContent = `Place of Birth: ${prophet.birthplace}`;
            prophetimg.setAttribute('src' , prophet.imageurl);
            prophetimg.setAttribute("alt", `Prophet ${prophet.name} ${prophet.lastname} image`);
            prophetimg.setAttribute("loading", "lazy")
            prophetimg.style.boxShadow = '0 0 30px #333';
            prophetimg.style.width = '200px';
            
            card.append(h2);
            card.append(p1);
            card.append(p2);
            card.append(prophetimg);
            cards.append(card);
      });

      

  });


