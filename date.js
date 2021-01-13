window.addEventListener('load', (event)=>{
    const update = document.querySelector('#currentDate');
    update.textContent = document.lastModified;

    const year = document.querySelector('#currentYear');
    year.textContent = new Date().getFullYear();
})