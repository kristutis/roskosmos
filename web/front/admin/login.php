<?php
if (isset($_POST['LOGIN'])){
	$user = trim($_POST['username']);
	$pass = trim($_POST['pass']);
	$stash = "3c259385eafc6ed9949107c0cf27ce64ca8f8a341420acd3e152a91c50c6f0c7";
	if ($stash == hash('sha256', $user.$pass)) {
		if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
        if (session_status() != PHP_SESSION_NONE) {
            $_SESSION["admin-Log"] = $user;
        }
		setcookie("login[Auser]", $user, time() + (86400 * 30), "/");
		setcookie("login[Apass]", hash('sha256', $pass.$user), time() + (86400 * 30), "/");
		header("location: index.php");
		return;
	}
}
if (isset($_COOKIE["login"]["Auser"]) && isset($_COOKIE["login"]["Apass"])){
	header("location: index.php");
	return;
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Roskosmos prisijungimas</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/dataTables.bootstrap4.min.css">
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
	<script src="https://cdn.datatables.net/1.10.22/js/dataTables.bootstrap4.min.js"></script>
	<script src="https://kit.fontawesome.com/7f292fb559.js" crossorigin="anonymous"></script>
	
	<link href="css/login.css" rel="stylesheet">
</head>
<body>
	<div class="container">
		<div style="height: 100%" class="row justify-content-center">
			<form class="col-4 align-self-center" action="?" method="post">
				<div class="input-group form-group">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-user"></i></span>
					</div>
					<input type="username" name="username" class="form-control" placeholder="Slapyvardis">
				</div>
				<div class="input-group form-group">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-key"></i></span>
					</div>
					<input type="password" name="pass" class="form-control" placeholder="Slaptažodis">
				</div>
				<div class="form-group">
					<input type="submit" name="LOGIN" value="Prisijungti" class="btn float-right login_btn">
				</div>
			</form>
		</div>
	</div>
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
</body>

</html>