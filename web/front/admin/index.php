<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
	
	$sql = "SELECT * FROM rezervaciju_laikai ORDER BY kuri_diena DESC LIMIT 1";
	$stmt = $pdo->query($sql);
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
	$rezervacijos_iki = date("Y-m-d", strtotime($row["kuri_diena"]));
	
	$sql = "SELECT COUNT(*) FROM treneris";
	$stmt = $pdo->query($sql);
	$treneriuN = $stmt->fetch(PDO::FETCH_ASSOC);
	
	$sql = $pdo->prepare("SELECT COUNT(*) FROM vartotojas WHERE role = :role");
	$sql->execute(array(":role" => "KLIENTAS"));
	$klientuN = $sql->fetch(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Roskosmos pagrindinis</title>
	
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
	<h1>Pagrindinis</h1><hr>
		<h3>Rezervacijos sukurtos iki: <h2 style="color:white"><?php echo $rezervacijos_iki; ?></h2></h3><hr>
		<h3>Sporto salėje yra <h2 style="color:white"><?php echo $treneriuN["COUNT(*)"]; ?> treneriai</h2></h3><hr>
		<h3>Sporto salė turi <h2 style="color:white"><?php echo $klientuN["COUNT(*)"]; ?> klientus</h2></h3>
	</div>
</div>

</body>

<script>
$(document).ready(function(){
	$("#main").addClass("active");
});
</script> 

</html>