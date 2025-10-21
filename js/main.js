document.addEventListener('DOMContentLoaded', () => {

    // --- Header Scroll Effect ---
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- Typed.js Initialization ---
    const options = {
        strings: ["B.Tech Student.", "Web Developer.", "Programmer.", "Learner.","Otaku."],
        typeSpeed: 50,  // Speed of typing
        backSpeed: 25,  // Speed of deleting
        backDelay: 1500, // Pause before deleting
        startDelay: 500, // Pause before starting
        loop: true,     // Loop the animation
    };

    const typed = new Typed('#typed-text', options);

});
