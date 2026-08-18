const helloButton =
    document.getElementById("helloButton");

const toast =
    document.getElementById("toast");

const themeToggle =
    document.getElementById("themeToggle");

const year =
    document.getElementById("year");

const timer =
    document.getElementById("timer");



/* =========================
   COPYRIGHT YEAR
========================= */

year.textContent =
    new Date().getFullYear();



/* =========================
   HELLO BUTTON
========================= */

helloButton.addEventListener("click", () => {

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

});



/* =========================
   LIGHT / DARK MODE
========================= */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");


    themeToggle.textContent =
        isLight ? "☾" : "☼";


    themeToggle.setAttribute(
        "aria-label",
        isLight
            ? "Switch to dark mode"
            : "Switch to light mode"
    );

});



/* =========================
   WEBSITE AGE
========================= */

/*
    Official website creation date:

    18 August 2026
    8:35:50 PM
    Brisbane, Australia

    +10:00 = Brisbane's UTC offset.
*/

const websiteCreated =
    new Date(
        "2026-08-18T20:45+10:00"
    );



function updateWebsiteAge() {

    const now =
        new Date();


    let elapsed =
        now - websiteCreated;


    // Prevent negative numbers
    // if someone visits before
    // the official creation time.

    if (elapsed < 0) {
        elapsed = 0;
    }


    const totalSeconds =
        Math.floor(
            elapsed / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;



    timer.textContent =
        `${days}d ` +
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}



updateWebsiteAge();


setInterval(
    updateWebsiteAge,
    1000
);



/* =========================
   SMOOTH SCROLLING
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });