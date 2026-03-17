const musicBtn = document.getElementById('musicToggle');
const music = document.getElementById('bgMusic');

// Estado salvo
if (localStorage.getItem('music') === 'on') {
  music.volume = 0.4;
  music.play();
}

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.volume = 0.4;
    music.play();
    localStorage.setItem('music', 'on');
  } else {
    music.pause();
    localStorage.setItem('music', 'off');
  }
});
