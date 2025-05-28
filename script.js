const toggleBtn = document.getElementById('toggle-theme');
const root = document.documentElement;
const som = document.getElementById('somAmbiente');

toggleBtn.addEventListener('click', () => {
  const temaAtual = root.getAttribute('data-theme');
  if (temaAtual === 'dark') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', 'dark');
  }
});

function toggleSom() {
  console.log("Botão clicado");

  if (som.paused || som.muted) {
    som.muted = false;
    som.play();
  } else {
    som.pause();
  }
}




