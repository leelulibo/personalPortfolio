document.addEventListener("DOMContentLoaded", function() {
    $('.about-slider').slick({
        dots: true, // Show navigation dots
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        const readMoreLinks = document.querySelectorAll(".read-more");

        readMoreLinks.forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                const moreContent = this.parentElement.querySelector(".more-content");
                moreContent.classList.toggle("show");
                if (moreContent.classList.contains("show")) {
                    this.textContent = "Read Less";
                } else {
                    this.textContent = "Read More";
                }
            });
        });
    });

