<?php
$imgfolder = 'phtoes/';
$images = scandir($imgfolder);  

foreach ($images as $image) {
    if ($image !== '.' && $image !== '..') {
	echo '<div class="photo"> <img src="' . $imgfolder . $image . '" /> </div>';
    }
}
?>
