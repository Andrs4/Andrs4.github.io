const requestURL = 'https://andrs4.github.io/lesson12/chamberOfCommerce/json/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const business = jsonObject['business'];

        const cards = document.querySelector(".cards")
        // select output location
        for (i = 0; i < 3; i ++) {
            let card = document.createElement("section");
            let h1 = document.createElement("h1");
            let h2 = document.createElement("h2");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            let p4 = document.createElement("p");
            let h3 = document.createElement("h3");
            let div = document.createElement("div");
            let businessimg = document.createElement("img");
            
            //card.setAttribute('class', "gridStyle");
            // template literals
            h1.textContent = `${business[i].name}`;
            h2.textContent = `${business[i].fullname}`;
            businessimg.setAttribute('src' , business[i].image);
            businessimg.setAttribute("alt", `${business[i].image} image`);
            businessimg.setAttribute("loading", "lazy")
            businessimg.style.boxShadow = '0 0 30px #333';
            businessimg.style.width = '200px';
            
            card.append(h1);
            card.append(businessimg);
            div.append(h2);
            div.append(p1);
            div.append(p2);
            div.append(p3);
            div.append(p4);
            div.append(h3);
            card.append(div)
            cards.append(card);
      };

  });