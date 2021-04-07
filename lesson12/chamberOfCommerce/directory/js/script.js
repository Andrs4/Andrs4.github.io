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
        business.forEach(eachB => {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let businessimg = document.createElement("img");
            
            // template literals
            h2.textContent = `${eachB.name} ${eachB.fullname}`;
            p1.textContent = `Date of Birth: ${eachB.city}`;
            p2.textContent = `Place of Birth: ${eachB.business}`;
            businessimg.setAttribute('src' , eachB.image);
            businessimg.setAttribute("alt", `${eachB.image} image`);
            businessimg.setAttribute("loading", "lazy")
            businessimg.style.boxShadow = '0 0 30px #333';
            businessimg.style.width = '200px';
            
            card.append(h2);
            card.append(p1);
            card.append(p2);
            card.append(businessimg);
            cards.append(card);
      });

  });