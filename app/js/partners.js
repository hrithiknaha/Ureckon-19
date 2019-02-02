function gray(event) {
    event.style.filter = "grayscale(0%)";
    event.classList.add('animated');
    event.classList.add('zoomIn');
    setTimeout(() => {
        event.classList.remove('zoomIn');
        event.classList.remove("animated");
    }, 1000);
    
}
function nogray(event) {
    event.style.filter = "grayscale(100%)";
}