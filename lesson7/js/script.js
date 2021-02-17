const imagesToLoad = document.querySelectorAll("img[data-src]")

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -500px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttibute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
});

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
    items.forEach(item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
    });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        observer.observer(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
