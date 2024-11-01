// Fungsi untuk mempersiapkan audio tetapi tidak memutarnya
function prepareMusic() {
    const music = document.getElementById('birthdayMusic');
    music.load();
}

// Fungsi untuk memutar audio saat ada interaksi pengguna
function playMusic() {
    const music = document.getElementById('birthdayMusic');
    if (music.paused) {
        music.play();
    }
}

// Fungsi untuk menampilkan pesan spesial
function revealMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block';
}
