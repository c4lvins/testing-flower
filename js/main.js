onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const bgMusic = document.getElementById('bgMusic');

    // Attempt to play music when animation starts
    bgMusic.play().catch(e => console.log("Audio play failed:", e));

    const titles = ('I LOVE U TYARA').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};