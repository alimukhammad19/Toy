const audio = document.getElementById('backgroundAudio');
const audioToggle = document.getElementById('audioToggle');
const audioIcon = document.getElementById('audioIcon');

// audio.muted = true;  // olib tashlandi
// audio.play() sahifa yuklanganda chaqirilmaydi

audioToggle.addEventListener('click', () => {
    if (audio.paused) {
        audio.muted = false; // agar kerak bo‘lsa
        audio.play();
        audioIcon.classList.remove('fa-volume-mute');
        audioIcon.classList.add('fa-volume-up');
        audioToggle.textContent = "Musiqani o'chirish";
        audioToggle.prepend(audioIcon);
    } else {
        audio.pause();
        audioIcon.classList.remove('fa-volume-up');
        audioIcon.classList.add('fa-volume-mute');
        audioToggle.textContent = "Musiqani yoqish";
        audioToggle.prepend(audioIcon);
    }
});
