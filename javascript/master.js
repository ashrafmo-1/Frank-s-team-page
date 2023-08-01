const allSkills = document.querySelector('.our-skills');
const allSpans = document.querySelectorAll('.our-skills .the-progress span');


window.onscroll = function() {
    if (window.scrollY >= allSkills.offsetTop) {
        console.log("hello bro");
        allSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    };
};