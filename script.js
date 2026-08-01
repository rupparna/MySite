const button = document.getElementById("enter-btn");
const logo = document.getElementById("logo");
const scan = document.querySelector(".scan-line");
const moon = document.querySelector(".moon");

// Landing page animation
if (button && logo && scan) {
    button.addEventListener("click", function () {
        logo.classList.add("activate");
        scan.classList.add("scan");
    });
}

// Moon animation
if (moon) {
    setTimeout(() => {
        moon.classList.add("moon-active");
    }, 700);
}

// Screen glitch
setInterval(() => {
    document.body.classList.add("glitch");

    setTimeout(() => {
        document.body.classList.remove("glitch");
    }, 120);

}, 7000);