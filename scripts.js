

function playSound(e) {

    //console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;//stops the function from running
    //console.log(audio);
    audio.currentTime = 0 //rewinds to the beginning of the audio
    audio.play();
    // console.log(key);
    key.classList.add('playing')

}



function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //will skip if not relevant
    // console.log(this);
    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

document.getElementById("demo").innerHTML = "Play That Funky Music, White Boy";


