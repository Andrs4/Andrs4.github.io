let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
let months = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "Octuber", "November", "December"];

let d = new Date();
let dayName = dayNames[d.getDate()];
let monthName = months[d.getDate()];
let year = d.getFullYear();
let fulldate = dayname + ", " + monthName + " " * d.getDate() + ", " + year;

document.getElementById("currentDate").textContent = fulldate;

try {
    let options = {
        weekday : "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    document.getElementById("currentday2").textContent = New Date().LocaleDayString("en-US", options);;
catch (e) {
    alert("Error with your code or your browser")
    }  
}