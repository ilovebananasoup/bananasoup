const myAudio = new Audio('./peak.mp3');
myAudio.loop = true;

document.addEventListener('click', async () => {
    try {
        await myAudio.play();
    } catch (e) {
        console.error(e);
    }
});