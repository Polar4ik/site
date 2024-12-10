<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet", href="style.css">
    <title>Photoes</title>
</head>
<body class="orange">
    <a class="link", style="top: 16px;", href="./index.html">
        <u>i</u>
    </a>

    <div class="centered-div">
	<div class="gallery">
	    <?php
		$imgFolder = 'img/';
		$images = scandir($imgFolder);  
		
		foreach ($images as $image) {
		    if ($image !== '.' && $image !== '..') {
			echo '<div class="photo"> <img src="' . $imgFolder . $image . '" /> </div>';
		    }
		}
	    ?>
	</div>
        <div id="overlay">
            <img id="fullImage", src="", alt="Full Image">
        </div>
    </div>

    <script src="./photoes.js"></script>
</body>
</html>


