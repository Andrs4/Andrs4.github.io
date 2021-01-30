function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
}


window.addEventListener('load', (event)=>{
    const update = document.querySelector('#currentDate');
    update.textContent = document.lastModified;

    const year = document.querySelector('#currentYear');
    year.textContent = new Date().getFullYear();
})