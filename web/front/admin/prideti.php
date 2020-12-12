<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
		$sandelioId = 1;

	if (isset($_POST["PRIDETI"]) && isset($sandelioId) && isset($_POST['aprasymas']) && isset($_POST['kaina']) && isset($_POST['kiekis']) && isset($_POST['pavadinimas']) && isset($_POST['foto'])){
		if (empty($_POST['aprasymas']) && empty($_POST['kaina']) && empty($_POST['kiekis']) && empty($_POST['pavadinimas']) && empty($_POST['foto'])){
			$message = "Užpildyti ne visi reikalingi duomenys!";
			echo "<script type='text/javascript'>alert('$message');</script>";
		} else {
			$sql = $pdo->prepare("UPDATE sandelys SET laisva_vieta = laisva_vieta + :prekes WHERE id = :sandelioId");
			$sql->execute(array(':prekes' => $_POST['kiekis'], ':sandelioId' => $sandelioId));

			$sql = $pdo->prepare("INSERT INTO preke (kiekis_sandelyje, pavadinimas, aprasymas, kaina, fk_sandelio_id, foto) VALUES (:prekes, :pavadinimas, :aprasymas, :kaina, :sandelioId, :foto)");
			$sql->execute(array(':prekes' => $_POST['kiekis'], ':pavadinimas' => $_POST['pavadinimas'], ':aprasymas' => $_POST['aprasymas'], ':kaina' => $_POST['kaina'], ':sandelioId' => $sandelioId, ':foto' => $_POST['foto']));
			header("Location: sandelys.php");
			return;
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Roskosmos preke</title>
	
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
<form method="post">
<h1>Prekės informacija</h1>
        <hr>      
        

        <p>
            
        </p>

        <div style="position: relative;height: 610px;">
		<h2>Nuotraukos url:<h2><input value="" name="foto" type="text"/>
        <div style="position: absolute;left: auto;">
            <img  src="https://archive.org/download/no-photo-available/no-photo-available.png" width="600" height="600">
        </div>

        <div style="position: absolute;left: 650px;">
				<h1>Pavadinimas: </h1>
				<input value="" name="pavadinimas" type="text"/>
				<h3>Aprašymas: <h3>
            	<input value="" name="aprasymas" type="text"/>
				<h2>Kaina: </h2>
				<input value="0" name="kaina" type="number" step="0.01"/>
				<h4>Kiekis sandelyje: </h4>
				<input value="0" name="kiekis" type="number"/>
				<input style="width:100%" name="PRIDETI" type="submit" class="btn btn-success" value="Prideti">
        </div>
    </div>
	</form>
</div>

</body>
</html>