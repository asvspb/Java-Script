const rollDice = () => {
    const MIN_VALUE = 1;
    const MAX_VALUE = 6;
    const randomNumber = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;
    const rnd1 = randomNumber;
    const rnd2 = randomNumber;
    const imgElement1 = document.querySelector(".img1");
    const imgElement2 = document.querySelector(".img2");
    const imgAttr1 = imgElement1.getAttribute('src');
    const imgAttr2 = imgElement2.getAttribute('src');
    const newSrc1 = imgAttr1.replace(/dice\d/, `dice${rnd1}`);
    const newSrc2 = imgAttr2.replace(/dice\d/, `dice${rnd2}`);
    imgElement1.setAttribute('src', newSrc1);
    imgElement2.setAttribute('src', newSrc2);
    if (rnd1 == rnd2) {
        refreshMe.textContent = 'Draw!'
    } else if (rnd1 > rnd2) {
        refreshMe.textContent = 'Player1 win!'
    } else {
        refreshMe.textContent = 'Player2 win!'
    }
};

// Get the refresh button element by its tag name
const refreshMe = document.querySelector("h1");

// Add an onclick event listener to the element
refreshMe.addEventListener('click', function () {
    setTimeout(function () { rollDice(); }, 0);
});
