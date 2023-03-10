const whiteKeys = document.querySelectorAll('.white-key');
const blackKeys = document.querySelectorAll('.black-key');

function playNote() {
  const note = this.dataset.note;
  const audio = new Audio(`notes/${note}.mp3`);
  audio.play();
}

whiteKeys.forEach(key => key.addEventListener('click', playNote));
blackKeys.forEach(key => key.addEventListener('click', playNote));
