let skillsProfileProgress = document.querySelector('.skills__circular_progress');
let progressStartValue = 0;
let progressEndValue = 100;
let speed = 10;

let progress = setInterval(() => {
    skillsProfileProgress.style.background = `conic-gradient(#A5A6F6 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
    progressStartValue++;
}, speed);