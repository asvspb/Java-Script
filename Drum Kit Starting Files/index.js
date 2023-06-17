// Define an array of objects that map each key to its corresponding audio file
const keySoundMap = [
    { key: 'w', sound: './sounds/tom-1.mp3' },
    { key: 'a', sound: './sounds/tom-2.mp3' },
    { key: 's', sound: './sounds/tom-3.mp3' },
    { key: 'd', sound: './sounds/tom-4.mp3' },
    { key: 'j', sound: './sounds/crash.mp3' },
    { key: 'l', sound: './sounds/snare.mp3' },
    { key: 'k', sound: './sounds/kick-bass.mp3' }
];

let isKeyDown = false;  // Flag to keep track of key state

// Add key press event listeners to the document object
document.addEventListener('keydown', (event) => {
    // Find the object that corresponds to the pressed key
    const keyObject = keySoundMap.find((obj) => obj.key === event.key);
    //If a matching object was found, play the corresponding audio file
    if (keyObject) {
        const audio = new Audio(keyObject.sound);
        audio.play();
    }
    // Check if the key is being held down and exit the function if it is
    if (isKeyDown) {
        return;
    }
    // Set the flag to indicate that the key is being held down
    isKeyDown = true;
    // Add the 'pressed' class to all button elements that match the key
    pressedButton(keyObject);
});

// Add keyup event listener to the document object
document.addEventListener('keyup', (event) => {
    // Reset the flag to indicate that the key is no longer being held down
    isKeyDown = false;
    // Remove the 'pressed' class from all button elements that match the key
    const keyObject = keySoundMap.find((obj) => obj.key === event.key);
    pressedButton(keyObject);
});

function pressedButton(keyObject) {
    const pressedButtons = document.querySelectorAll('.' + keyObject.key);
    for (let i = 0; i < pressedButtons.length; i++) {
        pressedButtons[i].classList.add('pressed');
    }
    setTimeout(() => {
        for (let i = 0; i < pressedButtons.length; i++) {
            pressedButtons[i].classList.remove('pressed');
        }
    }, 200);
}