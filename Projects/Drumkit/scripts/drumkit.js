function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = this.document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.key}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.key}"]`);

  // stop the function
  if (!audio) return;
  // rewind
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);
