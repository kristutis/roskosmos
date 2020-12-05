<?php
	// echo "hello";
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: *");
	header('Content-Type: application/json');

	$entityBody = file_get_contents('php://input');
	$data = json_decode($entityBody);

	$email = $data->email;
	$pavadinimas = $data->pavadinimas;
	$zinute = $data->zinute;	

	echo "emailas: ".$email."<br>";
	echo "emailo headeris: ".$pavadinimas."<br>";
	echo "emailo body: ".$zinute."<br>";

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

	$mail->Subject = $pavadinimas;
	$mail->Body = $zinute;
	$mail->AddAddress($email);
	$mail->Send();
?>