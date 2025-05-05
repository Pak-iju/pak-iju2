// AGC.js
(function() {
  // Menentukan mode secara otomatis (misalnya berdasarkan waktu)
  const currentHour = new Date().getHours();
  const isDayTime = currentHour >= 6 && currentHour < 18; // Mode terang di siang hari

  // Atur tema berdasarkan waktu
  if (isDayTime) {
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');
  }

  // Cek theme yang ada di localStorage
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
  }

  // Toggle Mode Gelap/Terang (jika diperlukan)
  const toggleButton = document.querySelector('.toggle-mode');
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('light');
      localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });
  }
})();
