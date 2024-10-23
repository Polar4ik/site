document.querySelectorAll('.photo img').forEach(image => {
    image.addEventListener('click', () => {
        const overlay = document.getElementById('overlay');
        const fullImage = document.getElementById('fullImage');
        fullImage.src = image.src;
        overlay.style.display = 'flex';
    }, false);
});

document.getElementById('overlay').addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}, false);
