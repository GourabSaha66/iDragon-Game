score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.wav');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        lucifer = document.querySelector('.lucifer');
        lucifer.classList.add('animateLucifer');
        setTimeout(() => {
            lucifer.classList.remove('animateLucifer')
        }, 700);
    }
    if (e.keyCode == 39) {
        lucifer = document.querySelector('.lucifer');
        luciferX = parseInt(window.getComputedStyle(lucifer, null).getPropertyValue('left'));
        lucifer.style.left = luciferX + 112 + "px";
    }
    if (e.keyCode == 37) {
        lucifer = document.querySelector('.lucifer');
        luciferX = parseInt(window.getComputedStyle(lucifer, null).getPropertyValue('left'));
        lucifer.style.left = (luciferX - 112) + "px";
    }
}

setInterval(() => {
    lucifer = document.querySelector('.lucifer');
    gameOver = document.querySelector('.gameOver');
    villen = document.querySelector('.villen');

    lx = parseInt(window.getComputedStyle(lucifer, null).getPropertyValue('left'));
    ly = parseInt(window.getComputedStyle(lucifer, null).getPropertyValue('top'));

    vx = parseInt(window.getComputedStyle(villen, null).getPropertyValue('left'));
    vy = parseInt(window.getComputedStyle(villen, null).getPropertyValue('top'));

    OffsetX = Math.abs(lx - vx);
    OffsetY = Math.abs(ly - vy);
    if (OffsetX < 113 && OffsetY < 52) {
        gameOver.innerHTML = "Game over - Reload to play again"
        villen.classList.remove('villenAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (OffsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(villen, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.2;
            villen.style.animationDuration = newDur + 's';
            console.log('New Animation Duration: ', newDur);
        }, 500);
    }

}, 10);


function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}