<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
		$sandelioId = 1;
		$sql = $pdo->prepare("SELECT * FROM preke WHERE id = :var_id");
		$sql->bindParam(':var_id', $_GET["prekeId"]);
		$sql-> execute();
		$results = $sql->fetch();

	if (isset($_POST["ATNAUJINTI"]) && isset($_POST['var_id']) && isset($sandelioId) && isset($_POST['aprasymas']) && isset($_POST['kaina']) && isset($_POST['kiekis'])){
		$sql = $pdo->prepare("SELECT kiekis_sandelyje FROM preke WHERE id = :var_id");
		$sql->bindParam(':var_id', $_POST['var_id']);
		$sql-> execute();

		$result = $sql -> fetch();
		if($_POST['kiekis'] - $result['kiekis_sandelyje'] >= 0){

		}
		$nkiek = $_POST['kiekis'] - $result['kiekis_sandelyje'];
		$sql = $pdo->prepare("UPDATE sandelys SET laisva_vieta = laisva_vieta + :prekes WHERE id = :sandelioId");
		$sql->execute(array(':prekes' => $nkiek, ':sandelioId' => $sandelioId));

		$sql = $pdo->prepare("UPDATE preke SET kiekis_sandelyje = :prekes, aprasymas = :aprasymas, kaina = :kaina WHERE id = :prekesId");
		$sql->execute(array(':prekes' => $_POST['kiekis'], ':aprasymas' => $_POST['aprasymas'], ':kaina' => $_POST['kaina'], ':prekesId' => $_GET['prekeId']));
		header("Location: placiau.php?prekeId=".$_GET['prekeId']);
		return;
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
<h1>Prekės informacija</h1>
        <hr>      
        

        <p>
            
        </p>

        <div style="position: relative;height: 610px;">
        <div style="position: absolute;left: auto;">
              <img  src="<?php echo $results['foto'];?>" width="600" height="600">
        </div>

        <div style="position: absolute;left: 650px;">
            <h2><?php echo $results['pavadinimas'];?></h2>
			<h4>Aprašymas<h4>
			<form method="post">
            	<input value="<?php echo $results['aprasymas'];?>" name="aprasymas" type="text"/>
				<h2>Kaina</h2>
				<input value="<?php echo $results['kaina'];?>" name="kaina" type="number" step="0.01"/>
				<h1>Kiekis sandelyje</h1>
				<input value="<?php echo $results['kiekis_sandelyje'];?>" name="kiekis" type="number"/>
				<input type="hidden" value="<?php echo $results['id']; ?>" name="var_id">
				<input style="width:100%" name="ATNAUJINTI" type="submit" class="btn btn-danger" value="Atnaujinti">
			</form>
        </div>
    </div>
</div>

</body>
</html>