// Fungsi untuk membuat animasi love di background
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Jumlah ikon love
  const loveCount = 50;

  for (let i = 0; i < loveCount; i++) {
    const love = document.createElement("div");
    love.setAttribute("data-love", "");
    love.textContent = "❤️";

    // Posisi horizontal dan vertikal acak
    love.style.left = `${Math.random() * 90}vw`;
    love.style.top = `${Math.random() * 100}px`;

    // Durasi animasi acak antara 3-6 detik
    love.style.animationDuration = `${Math.random() * 3 + 3}s`;

    // Ukuran ikon acak antara 1-2.5rem
    love.style.fontSize = `${Math.random() * 1.5 + 1}rem`;

    // Tambahkan elemen ke body
    body.appendChild(love);
  }

  console.log("Love animation script loaded!");
});

// Fungsi utama untuk alert interaktif
document
  .getElementById("startButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Alert pertama: Selamat datang
    alert("Selamat datang!");

    // Input nama pengguna
    const nama = prompt("Masukkan nama Anda:");
    if (!nama || nama.trim() === "") {
      alert("Nama tidak boleh kosong. Silakan coba lagi.");
      return;
    }

    // Pertanyaan hubungan dengan Andika
    const hubungan = confirm(
      `Halo ${nama}, apakah Anda pacar Andika Dwi Januar?`
    );

    if (hubungan) {
      // Jika "Ya", lanjut ke halaman website
      alert("Selamat! Anda dapat melanjutkan untuk membuka hadiahnya.");
      window.location.href = "halaman1.html"; // Arahkan ke halaman berikutnya
    } else {
      // Jika "Tidak", keluar dari halaman
      alert("Maaf, Anda tidak dapat melanjutkan.");
      window.close(); // Menutup halaman (opsional)
    }
  });
