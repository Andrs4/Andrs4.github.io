function makeRequest() {
    let start_city = document.getElementById('startCity').value;
    let start_state = document.getElementById('startState').value;
    let end_city = document.getElementById('endCity').value;
    let end_state = document.getElementById('endState').value;
    var url = "/cgi-bin/cs213/mileageAjaxJSON?startCity=" + start_city + "&startState=" + start_state + "&endCity=" + end_city + "&endState=" + end_state;
   
    if ((start_city != "") && (start_state != "") && (end_city != "") && (end_state != "")) {
        var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            //console.table(data);
            document.getElementById("contentDiv").innerHTML = `The distance between ${start_city} and ${end_city} is ${data.trip.miles} miles.`;

            }
        else if (this.status == 404){
            let errorMessage = "This file does not exist.";
            errorMessage = errorMessage.fontcolor("red");
            document.getElementById("contentDiv").innerHTML = errorMessage; 
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
    }

    else {
        let errorMessage2 = "Please complete the form."
        document.getElementById("contentDiv").innerHTML = errorMessage2.fontcolor("red");
    }
    };