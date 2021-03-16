
/*It hides the menu bar when its size is smaller and let it show when clicking a specific element*/
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
}


window.addEventListener('load', (event)=>{
    
    /*
    const update = document.querySelector('#currentDate');
    update.textContent = document.lastModified;
    */

    const update = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-us', update);


    const year = document.querySelector('#currentYear');
    year.textContent = new Date().getFullYear();
})

window.onload = function toggleAnnouncement() {
    let day = new Date();
    let actual = day.getDay();
    /*==== is tried to check for friday and if it's not it should hide the aside element=====*/
    if (actual != 5) {    
        document.getElementById("pancakes").classList.toggle("hide");
    }
}
