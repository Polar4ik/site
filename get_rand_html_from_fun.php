<?php
$files = glob('./fun/*.html');

if (count($files) > 0) {
    $randomFile = $files[array_rand($files)];
    echo $randomFile;
}
?>
