const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");

const audio = document.getElementById("audio");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  audio.play();
}

setInterval(() => {
  setDate();
}, 1000);
