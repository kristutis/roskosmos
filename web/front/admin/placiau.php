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

	if (isset($_POST["DELETE"]) && isset($_POST['var_id']) && isset($sandelioId) ){
		$sql = $pdo->prepare("SELECT kiekis_sandelyje FROM preke WHERE id = :var_id");
		$sql->bindParam(':var_id', $_POST['var_id']);
		$sql-> execute();

		$result = $sql -> fetch();

		$sql = $pdo->prepare("DELETE FROM preke WHERE id = :var_id");
		$sql->execute(array(":var_id" => $_POST['var_id']));

		$sql = $pdo->prepare("UPDATE sandelys SET laisva_vieta = laisva_vieta + :prekes WHERE id = :sandelioId");
		$sql->execute(array(':prekes' => $result['kiekis_sandelyje'], ':sandelioId' => $sandelioId));
		header("Location: sandelys.php");
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
            <h4><?php echo $results['aprasymas'];?></h4>
			<h2><?php echo $results['kaina'];?>$</h2>
			<form method="post">
				<input type="hidden" value="<?php echo $results['id']; ?>" name="var_id">
				<input style="width:100%" name="DELETE" type="submit" class="btn btn-danger" value="Ištrinti">
			</form>
			<form action="redaguoti.php" method="get">
				<input type="hidden" value="<?php echo $results['id']; ?>" name="prekeId">
				<input style="width:100%" name="EDIT" type="submit" class="btn btn-success" value="Redaguoti">
			</form>
        </div>
    </div>
</div>

</body>
</html>