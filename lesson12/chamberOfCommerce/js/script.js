window.addEventListener('load', (event)=>{

    const update = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-us', update);


    /*const year = document.querySelector('#currentYear');
    year.textContent = new Date().getFullYear();*/
});

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
}

function addingBackground() {
    document.getElementsByClassName("top").classList.toggle("has-background");
    window.onmouseover = () => {
        if (window.innerHeight < 50) mainnav.classList.remove("has-background")
    };
}