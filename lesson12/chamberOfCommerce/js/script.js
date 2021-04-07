
window.addEventListener('load', (event)=>{

    const update = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-us', update);

});

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
}

/*==== Tries to change the background color for the header when scrolling down ====*/
function addingBackground() {
    document.getElementsByClassName("top").classList.toggle("has-background");
    window.onmouseover = () => {
        if (window.innerHeight < 50) mainnav.classList.remove("has-background")
    };
}


/*==== Add a upcoming event to the page ====*/
window.onload = function toggleEvents() {
    let day = new Date();
    let actual = day.getDate();
    /*==== is tried to check for friday and if it's not it should hide the aside element=====*/
    if (actual >= 11) {    
        document.getElementById("elections").classList.toggle("hide");
    }
}