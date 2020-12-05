<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
	
	if (isset($_POST["SEND"])){
		
		require_once("mailingAPI.php");
		
		$mail->Subject = $_POST["subject"];
		$mail->Body = $_POST["content"];
		
		$sql = "SELECT * FROM vartotojas";
		$stmt = $pdo->query($sql);
		while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
			$mail->AddAddress($row["email"]);
		}
		
		$mail->Send();
		header("location: reklamos.php");
		return;
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Roskosmos reklamos siuntimas</title>
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/dataTables.bootstrap4.min.css">
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
	<script src="https://cdn.datatables.net/1.10.22/js/dataTables.bootstrap4.min.js"></script>
</head>
<body>

<?php include_once("menu.php"); ?>

<div class="container">
	<div class="col-6">
		<h1>Reklamos siuntimas</h1>
		<p><b>Čia galima išsiųsti reklamas visiems vartotojams ir treneriams!<b></p>
		<form method="post">
			<div class="mt-20">
				<label for="subject"><h2>Titulas:</h2></label>
				<input type="text" class="form-control" name="subject" required>
			</div>
			
			<div class="mt-20">
				<label for="content"><h2>Turinys:</h2></label>
				<textarea class="form-control" name="content" rows="10"></textarea>
			</div>
			
			<input type="submit" class="btn btn-success" name="SEND" value="Išsiųsti">
		</form>
	</div>
</div>

</body>

<script>
$(document).ready(function(){
	$("#reklamos").addClass("active");
});
</script> 

</html>