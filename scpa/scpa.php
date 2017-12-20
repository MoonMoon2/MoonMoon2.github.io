<?php
(isset($_GET["ntext"])) {
$hello = $_GET["ntext"];
$file = fopen("prev.txt", "w") or die("Unable to open file!");
  fwrite($file, $hello + "\n");
  fclose($file);
}
?>
