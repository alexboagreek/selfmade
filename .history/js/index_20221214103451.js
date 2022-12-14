let skillsProfileProgress = document.querySelector('.skills__circular_progress');
let progressStartValue = 0;
let progressEndValue = 90;
let speed = 1000;

let progress = setInterval(() => {
    skillsProfileProgress.style.background

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
    progressStartValue++;
}, speed);