<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
	$dienos = ["Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis","Sekmadienis"];
	if (isset($_POST["SET-ADDRESS"])){
		$sql = "UPDATE sporto_sale SET adresas = :address WHERE id = :id";
		$stmt = $pdo->prepare($sql);
		$stmt->execute(array(
					':address' => $_POST['address'],
					':id' => 1)); 
		header("Location: sporto-sale.php");
		return;
	}
	
	if (isset($_POST["SET-TIME"])){
		$sql = "UPDATE sporto_sale SET darbo_laikas = :laikas WHERE id = :id";
		$stmt = $pdo->prepare($sql);
		$laikas = "";
		foreach ($dienos as $day) {
			$laikas=$laikas.$_POST["{$day}1"]."-".$_POST["{$day}2"].";";
		}
		$stmt->execute(array(
					':laikas' => $laikas,
					':id' => 1)); 
	}
	
	$sql = "SELECT * FROM sporto_sale";
	$stmt = $pdo->query($sql);
	$sale = $stmt->fetch(PDO::FETCH_ASSOC);
	
	$laikai = explode(";", $sale["darbo_laikas"]);
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Roskosmos sporto salė</title>
	
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
	<h1>Sporto salė:</h1>
	
	<div class="row">
		<div class="col-6">
			<h2>Salės adresas:</h2>
			<form method="post">
				<div style="width: 100%">
					<input type="text" class="form-control" name="address" value="<?php echo $sale["adresas"]; ?>">
				</div>
				<input type="submit" class="btn btn-success" name="SET-ADDRESS" value="Išsaugoti">
			</form>
		</div>
		
		<div class="col-6">
			<h2>Salės darbo laikas:</h2>
			<form method="post">
				<?php
					$index = 0;
					foreach ($dienos as $day){ 
						$dien_laikas=explode("-", $laikai[$index]);?>
						<h3><?php echo $day;?></h3>
						<div class="form-group">
							Nuo <input type="text" name="<?php echo $day."1"?>" value="<?php echo $dien_laikas[0];?>">
							Iki <input type="text" name="<?php echo $day."2"?>" value="<?php echo $dien_laikas[1];?>">
						</div> <?php
						$index++;
					}
				?>
				<input type="submit" class="btn btn-success" name="SET-TIME" value="Išsaugoti">
			</form>
		</div>
	</div>
	<div class="row">
		<div class="col-12">
			<h1>Rezervacijų laikų kūrimas:</h1>
			<form method="post" action="rezervacijos-laikai.php">
				<div class="form-group">
					<b>Dienų kiekis: </b><input type="number" name="day-amount" required>
					<b>Žmonių kiekis: </b><input type="number" name="people-amount" required>
				</div>
				<input type="submit" class="btn btn-success" name="RESERVE" value="Sukurti rezervacijas">
			</form>
		</div>
	</div>
</div>

</body>

<script>
$(document).ready(function(){
	$("#sporto-sale").addClass("active");
});
</script> 

</html>