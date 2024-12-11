document.addEventListener('DOMContentLoaded', function() {
    let chosenLanguage = localStorage.getItem('chosenLanguage');
});


function traslation(id) {
    localStorage.setItem('chosenLanguage', id);
    let element = document.getElementById("text-info")
    if (id == 0) {
        element.innerHTML = "Hi, i'm Polar4ik(Polarchik) and i'm idiot,\ni made a strange things like this\n<a href='https://github.com/Polar4ik'>github</a> <a href='https://polar4ik.itch.io/'>itch.io</a> discord: @polar4ik"
    }
    if (id == 1) {
        element.innerHTML = 'Привет, я Polar4ik(Полярчик) и я идиот,\nя делаю разные вещи по типу этого\n<a href="https://github.com/Polar4ik">github</a> <a href="https://polar4ik.itch.io/">itch.io</a> discord: @polar4ik'
    }
    if (id == 2) {
        element.innerHTML = 'Ahoj, jsem Polar4ik(Polarčik) a já idiot,\njsem udělám podivné věci jako je tento\n<a href="https://github.com/Polar4ik">github</a> <a href="https://polar4ik.itch.io/">itch.io</a> discord: @polar4ik'
    }
}


/*function selectRandomDoc() {
    const files = [
        "./fun/dust.html",
        "fun/snow.html",
        "fun/snowndust.html",
        "fun/normal.html",
    ]

    const randomIndex = Math.floor(Math.random() * files.length);
    const randomFile = files[randomIndex];

    window.location.href = randomFile;
}*/
