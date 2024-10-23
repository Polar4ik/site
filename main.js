function traslation(id) {
    let element = document.getElementById("text-info")
    if (id == 0) {
        element.innerHTML = "Hi, i'm Polar4ik(Polarchik) and i'm idiot,\ni made a strange things like this\n<a href='https://github.com/Polar4ik'>github</a> <a href='https://polar4ik.itch.io/'>itch.io</a>"
    }
    if (id == 1) {
        element.innerHTML = 'Привет, я Polar4ik(Полярчик) и я идиот,\nя делаю разные вещи по типу этого\n<a href="https://github.com/Polar4ik">github</a> <a href="https://polar4ik.itch.io/">itch.io</a>'
    }
    if (id == 2) {
        element.innerHTML = 'Ahoj, jsem Polar4ik(Polarčik) a já idiot,\njsem udělám podivné věci jako je tento\<a href="https://github.com/Polar4ik">github</a> <a href="https://polar4ik.itch.io/">itch.io</a>'
    }
}


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
