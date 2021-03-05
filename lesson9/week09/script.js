var mexico = document.getElementById("mexico");
var usa = document.getElementById("usa");
var canada = document.getElementById("canada");
var russia = document.getElementById("russia");


function countryFunc(country) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "" +country + ".txt", false);
    xhttp.send();
    document.getElementById("show").innerHTML = xhttp.responseText;
};



/*=============== checks for an input if is a json file display its content ================*/

function requestFile() {
    let counter = 0;
    if (counter < 1) { 
        counter += 1;
        let inputFile = document.getElementById("inputFile").value;
        let jsonfile = new XMLHttpRequest();

        
        
        let showInfo = document.getElementById("showInfo");
        jsonfile.onreadystatechange = function() {
            if ( this.readyState == 4 && this.status == 200){
                let mydata = JSON.parse(jsonfile.responseText);
                let allstudents = mydata.students;
                console.table(allstudents); // for testing the data
                addingHTML(allstudents);
            }
            else if (this.status == 404){
                let error = "this file does not exist";
                error = error.fontcolor("red")
                showInfo.innerHTML = error;
            }
        };
        jsonfile.open("GET", "" + inputFile, true);
        jsonfile.send();
    }

    function addingHTML(data) {
        let htmlString ="";

        for (i = 0; i < data.length; i++) {
            htmlString += "<div> <p>" + data[i].first + " " + data[i].last + "</p>" +
            "<p> <strong> from: </strong>" + data[i].address.city + ", " + data[i].address.state + "-" + data[i].address.zip + "</p>" + 
            "<p> <strong> GPA: </strong>" + data[i].gpa + "</p>" +
            "<p> of " + data[i].major + "</p> </div>";
        }
        //showInfo.insertAdjacentHTML("beforeend", htmlString)
        showInfo.innerHTML = htmlString;
    }
}