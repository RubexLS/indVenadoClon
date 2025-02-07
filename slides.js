let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slides_kris");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#bbb";
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.backgroundColor = "#717171";
    setTimeout(showSlides, 2000); // Cambia de imagen cada 2 segundos
}