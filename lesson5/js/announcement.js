window.onload = function toggleAnnouncement() {
    let day = new Date();
    let actual = day.getDay();
    /*==== is tried to check for friday and if it's not it should hide the aside element=====*/
    if (actual != 5) {    
        document.getElementById("pancakes").classList.toggle("hide");
    }



