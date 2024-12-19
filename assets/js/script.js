// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-In Effect on Scroll
const faders = document.querySelectorAll(".fade-in");
const options = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
    });
}, options);

faders.forEach(fader => appearOnScroll.observe(fader));
