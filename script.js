const weddingDate = new Date('November 15, 2025 09:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "To'y boshlandi!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + " <span>kun</span>";
    document.getElementById('hours').innerHTML = hours + " <span>soat</span>";
    document.getElementById('minutes').innerHTML = minutes + " <span>daqiqalar</span>";
    document.getElementById('seconds').innerHTML = seconds + " <span>soniyalar</span>";
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // sahifa yuklanganda darhol ishlashi uchun

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
