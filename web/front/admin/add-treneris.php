<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
	
	if (isset($_POST["ADD"])){
		$sql = "INSERT INTO vartotojas (id, vardas, pavarde, email, slaptazodis, role) VALUES (:id, :vardas, :pavarde, :email, :slaptazodis, :role)";
		$stmt = $pdo->prepare($sql);
		$stmt->execute(array(
				':id' => hash('sha1', $_POST['email'].$_POST['pass']),
				':vardas' => $_POST['vardas'],
				':pavarde' => $_POST['pavarde'],
				':email' => $_POST['email'],
				':slaptazodis' => $_POST['pass'],
				':role' => "TRENERIS")); 
		
		$sql = $pdo->prepare("INSERT INTO treneris (fk_trenerio_id) VALUES (:id)");
		$sql->execute(array(':id' => hash('sha1', $_POST['email'].$_POST['pass'])));
		header("Location: treneriai.php");
		return;
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Roskosmos treneriai</title>
	
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
	<h1>Naujas treneris:</h1>
	
	<form method="post" enctype="multipart/form-data">
		<div class="mt-10">
			<label for="vardas">Trenerio vardas</label>
			<input type="text" name="vardas" class="form-control" required>
		</div>
		
		<div class="mt-10">
			<label for="pavarde">Trenerio pavardė</label>
			<input type="text" name="pavarde" class="form-control" required>
		</div>
		
		<div class="mt-10">
			<label for="email">Trenerio el. paštas</label>
			<input type="email" name="email" class="form-control" required>
		</div>
		
		<div class="mt-10">
			<label for="pass">Trenerio slaptažodis</label>
			<input type="password" name="pass" class="form-control" required>
		</div>
		
		<div class="mt-10">
			<input type="submit" name="ADD" value="Pridėti" class="btn btn-success">
		</div>
	</form>
	
</div>

</body>

<script>
$(document).ready(function(){
	$("#treneriai").addClass("active");
});
</script> 

</html>