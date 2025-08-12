const title = document.querySelector('.title')
const text = `I Have Something For U`.split('')
const bgMusic = document.getElementById('bgMusic');

// Attempt to play music (with user interaction requirement)
document.addEventListener('click', function() {
  bgMusic.play().catch(e => console.log("Audio play failed:", e));
}, { once: true });

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});