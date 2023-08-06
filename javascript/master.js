const allSkills = document.querySelector('#skills');
const allSpans = document.querySelectorAll('.our-skills .the-progress span');
console.log(allSkills);


window.onscroll = function() {
    if (window.scrollY >= allSkills.offsetTop) {
        allSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    };
};



let nums = document.querySelectorAll('.status .box .number');
let section = document.querySelector(".status");
let started = false;

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}