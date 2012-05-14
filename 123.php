<?php
// echo '123';exit;echo '123';exit;
error_reporting(E_ALL);
ini_set('display_errors','1');

$host = "http://wall.plasm.it/public/images/middle";
$savepath = "imgs";
// var_dump($host);exit;

for ($i=67;$i<175;$i++) {
	$url = $host."/".$i.".jpg";
	$s = $savepath."/".$i.".jpg";
	grab_image($url, $s);
	// break;
}


function grab_image($url,$saveto){
	$ch = curl_init ($url);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
	$raw=curl_exec($ch);
	curl_close ($ch);

	if(file_exists($saveto)){
		unlink($saveto);
	}
	$fp = fopen($saveto,'x');
	fwrite($fp, $raw);
	fclose($fp);
}
?>