const buttonColors = ['red', 'blue', 'yellow', 'green'];
const buttonSoundMap = [
    { button: 'blue', sound: './sounds/blue.mp3' },
    { button: 'red', sound: './sounds/red.mp3' },
    { button: 'green', sound: './sounds/green.mp3' },
    { button: 'yellow', sound: './sounds/yellow.mp3' },
    { button: 'wrong', sound: './sounds/wrong.mp3' },
    { button: 'good', sound: './sounds/crash.mp3' },
];
let game = {
    level: 0,
    pattern: [],
    on: false,
    bestScore: 0,
};
let userPattern = [];
let patternMatch = true;


function animatePress(currentColor) {
    $('#' + currentColor).addClass('pressed')
    setTimeout(() => {
        $('#' + currentColor).removeClass('pressed')
    }, 100);
}

function animatePrePress(currentColor) {
    $('#' + currentColor).addClass('prePressed')
    setTimeout(() => {
        $('#' + currentColor).removeClass('prePressed')
    }, 100);
}

function playSound(color) {
    const sound = buttonSoundMap.find(soundObj => soundObj.button === color);
    if (sound) {
        const audio = new Audio(sound.sound);
        audio.play();
    }
}

function userColorPattern(color) {
    userPattern.push(color);
    $('#tech-info').text(`Player: ${userPattern}`);
}

async function refreshAsyncPage() {
    try {
        const res = await fetch(window.location.href, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        const html = await res.text();
        // sanitize all user input before including it in any dynamically generated content.
        document.documentElement.insertAdjacentHTML('beforeend', html);
    } catch (err) {
        console.error(err);
    }
    userPattern = [];
    game.level = 0;
    game.pattern = [];
    gameStart();
}

function nextRandomColorIntoList() {
    const randomColor = buttonColors[Math.floor(Math.random() * 4)];
    game.pattern.push(randomColor);
    animatePrePress(randomColor);
    playSound(randomColor);
    $('h1').text(`Game level: ${game.level}`);
}

function userChooseColor() {
    if (game.on) {
        const userChosenColor = $(this).attr('id');
        animatePress(userChosenColor);
        playSound(userChosenColor);
        userColorPattern(userChosenColor);
        $('h1').text(`Game level: ${game.level}`);
        checkPatterns();
    }
}

function checkPatterns() {
    for (let i = 0; i < userPattern.length; i++) {
        if (userPattern[i] !== game.pattern[i]) {
            patternMatch = false;
            $('h1').text(`Game Over!!`);
            playSound('wrong');
            if (game.level > game.bestScore) {
                game.bestScore = game.level
            }
            $('#best-score').text(`Best score: ${game.bestScore}`);
            setTimeout(() => {
                refreshAsyncPage();
                game.on = false;
            }, 2000);
            break;
        } else {
            patternMatch = true;
            $('h1').text(`Game level: ${game.level}`);
            if (patternMatch && userPattern.length === game.pattern.length) {
                userPattern = [];
                playSound('good');
                setTimeout(() => {
                    nextLevel();
                }, 2000);
            }
        }
    }
}

function nextLevel() {
    game.on = true;
    userPattern = [];
    game.level += 1;
    $('h1').text(`Game level: ${game.level}`);
    nextRandomColorIntoList();
}

function gameStart() {
    $('#best-score').text(`Best score: ${game.bestScore}`);
    $('body').on('keydown', function (event) {
        if (event.key === 'w') {
            refreshAsyncPage();
            game.on = false;
        } else {
            nextLevel();
        }
    });
    $('.btn').off('click').on('click', userChooseColor);
};

$(gameStart);