// --- Audio boshqaruv ---

const audio = document.getElementById('backgroundAudio');
const audioToggle = document.getElementById('audioToggle');
const audioIcon = document.getElementById('audioIcon');

// Boshlanishda audio mutedan bo'lsin - autoplay ishlashi uchun
audio.muted = true;

audio.play().catch(() => {
    // Autoplay bloklansa (mobil brauzerlar), tugma yordamida yoqish kerak
    audioToggle.textContent = "Musiqani yoqish";
    audioIcon.classList.remove('fa-volume-up');
    audioIcon.classList.add('fa-volume-mute');
});

// Foydalanuvchi tugmani bosganda audio ovozini boshqarish
audioToggle.addEventListener('click', () => {
    if (audio.paused) {
        audio.muted = false;
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

// Qo'shimcha: foydalanuvchi sahifa bo'ylab biror joyga bosganda audio ovozini yoqish uchun (ixtiyoriy)
