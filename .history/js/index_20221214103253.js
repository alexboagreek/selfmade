let skillsProfileProgress = document.querySelector('.skills__circular_progress');
let progressStartValue = 0;
let progressEndValue = 90;
let speed = 1000;

let progress = setInterval(() => {

    if (progressStartValue == progressEndValue) {
        clearInterval(progress)
    }
    progressStartValue++;
}, speed);