const start = document.querySelector('.start');
const targetArea = document.getElementById("target-area");

start.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    const targetPosition = targetArea.offsetTop; // Get target area's position from top

    // Smooth scrolling with animation
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

const letstalk = document.querySelector('.button-50');
const targetArea1 = document.getElementById("target-area");

letstalk.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    const targetPosition = targetArea1.offsetTop; // Get target area's position from top

    // Smooth scrolling with animation
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

const letstalk1 = document.querySelector('#btn');
const targetArea2 = document.getElementById("target-area");

letstalk1.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    const targetPosition = targetArea2.offsetTop; // Get target area's position from top

    // Smooth scrolling with animation
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

const skl = document.querySelector('#skl');
const skillArea = document.getElementById("skills-area");

skl.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    const targetPosition = skillArea.offsetTop; // Get target area's position from top

    // Smooth scrolling with animation
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

const proj = document.querySelector('#proj');
const projectArea = document.getElementById("projects-area");

proj.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    const targetPosition = projectArea.offsetTop; // Get target area's position from top

    // Smooth scrolling with animation
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

const cnt = document.querySelector('#cnt');
const conatactArea = document.getElementById("contact-area");

cnt.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    const targetPosition = conatactArea.offsetTop; // Get target area's position from top

    // Smooth scrolling with animation
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});



function menu() {
    let x = document.querySelector("nav ul");
    x.style.left === "0px" ? x.style.left = "-100%" : x.style.left = "0px";
}