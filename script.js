/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking link */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Computer Science Student",
    "Java Programmer",
    "Creative Learner",
    "Future Software Developer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}


typeEffect();


/* =========================================
   SKILL PROGRESS BAR
========================================= */

const progressBars =
    document.querySelectorAll(".progress-bar");


function animateSkills() {

    progressBars.forEach(function (bar) {

        const width =
            bar.getAttribute("data-width");

        bar.style.width = width;

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const sections =
    document.querySelectorAll(".section, .quick-info");


function revealSections() {

    const windowHeight =
        window.innerHeight;

    sections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {

            section.classList.add("show");

        }

    });

}


window.addEventListener("scroll", function () {

    revealSections();

});


/* Run once when page loads */

revealSections();


/* =========================================
   SKILL ANIMATION ON SCROLL
========================================= */

window.addEventListener("scroll", function () {

    const skillsSection =
        document.getElementById("skills");

    if (!skillsSection) return;

    const position =
        skillsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        animateSkills();

    }

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");

        return;

    }


    alert(
        "Thank you " +
        name +
        "! Your message has been submitted successfully."
    );


    contactForm.reset();

});
