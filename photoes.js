document.addEventListener('DOMContentLoaded', function() {
    loadImages();
});

function loadImages() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'photoes.php', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const gallery = document.querySelector('.gallery');
            gallery.innerHTML = xhr.responseText; 

	    const overlay = document.getElementById('overlay');
            const fullImage = document.getElementById('fullImage');

            document.querySelectorAll('.photo img').forEach(image => {
                image.addEventListener('click', () => {

                    fullImage.src = image.src;
                    overlay.style.display = 'flex';
                });
            });
	}
    };

    xhr.send();
}

document.getElementById('overlay').addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}, false);

