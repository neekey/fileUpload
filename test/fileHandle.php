<?php

if ( !isset( $_FILES['file'] ) || $_FILES["file"]["error"] > 0 ){
  	echo '{"result":false,"error":"' . $_FILES["file"]["error"] . '"}';
}
else {
	echo '{"result":"true",';
	echo '"filename": "' . $_FILES["file"]["name"] . '",';
  	echo '"Type": "' . $_FILES["file"]["type"] . '",';
  	echo '"Size": "' . ($_FILES["file"]["size"] / 1024) . 'Kb"}';
}
?>
