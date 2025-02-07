window.addEventListener("scroll", function() {
    var barraNavegacion = document.querySelectorAll(".toolbar, nav, .site");
    barraNavegacion.forEach(function(barNav) {
        if (window.scrollY > 80) { 
            barNav.classList.add("scrolled");
        } else {
            barNav.classList.remove("scrolled");
        }
    });
});