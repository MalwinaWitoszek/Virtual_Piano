
function playPiano(e) {

    let sound, key;
    if (e.type === "mousedown") {
        sound = document.querySelector(`audio[data-key="${e.target.attributes[0].nodeValue}"]`);
        key = document.querySelector(`[class^="key"][data-key="${e.target.attributes[0].nodeValue}"]`);
    } else {
        sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        key = document.querySelector(`[class^="key"][data-key="${e.keyCode}"]`)
    };


    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
}

function stopPlay(e) {

    const key = document.querySelector(`[class^="key"][data-key="${e.keyCode}"]`) || document.querySelector(`[class^="key"][data-key="${e.target.attributes[0].nodeValue}"]`);
    key.classList.remove('playing');
}

document.addEventListener('keydown', playPiano);
document.addEventListener('mousedown', playPiano);
document.addEventListener('keyup', stopPlay);
document.addEventListener('mouseup', stopPlay);
