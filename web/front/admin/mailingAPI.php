<?php

	require_once("PHPMailer/PHPMailerAutoload.php");
		
	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = 'ssl';
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = '465';
	$mail->isHTML();
	$mail->Username = 'ISP.Roskosmos@gmail.com';
	$mail->Password = 'labai*gerasslaptikas123';
	$mail->SetFrom('no-reply@roskosmos.lt');

?>