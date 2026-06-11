const myAudio = new Audio('./peak.mp3');
myAudio.loop = true;

document.addEventListener('click', async () => {
    try {
        await myAudio.play();
        document.getElementById('img').classList.add('peak');
    } catch (e) {
        console.error(e);
    }
});