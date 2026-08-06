window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});
// =========================================
// LANGUAGE SYSTEM
// =========================================

let currentLanguage = localStorage.getItem("language") || "en";

function changeLanguage(language) {

    currentLanguage = language;

    localStorage.setItem("language", language);

    document.querySelectorAll(".lang-btn").forEach(btn => {

        btn.classList.remove("active");

    });

    document
        .querySelector(`[data-language="${language}"]`)
        .classList.add("active");

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        if (translations[language][key]) {

            element.innerHTML = translations[language][key];

        }

    });

    document.querySelectorAll("[data-lang-placeholder]").forEach(element => {

    const key = element.dataset.langPlaceholder;

    if (translations[language][key]) {

        element.placeholder = translations[language][key];

    }

});
}

document.querySelectorAll(".lang-btn").forEach(button => {

    button.addEventListener("click", () => {

        changeLanguage(button.dataset.language);

    });

});

changeLanguage(currentLanguage);
