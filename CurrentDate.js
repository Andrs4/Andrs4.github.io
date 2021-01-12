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
    let 
}