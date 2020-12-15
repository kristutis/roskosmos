<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
		
		//var_dump($_POST);
		$qs = "SELECT * FROM `inventorius` WHERE `inventoriaus_id` = '".$_POST['invsar']."'";
		$q = $pdo->prepare($qs);
		$q-> execute();
		$results = $q->fetch(PDO::FETCH_ASSOC);
		//var_dump($results);
		$id = $_POST['invsar'];
		//var_dump($id);
		if (isset($_POST['EDIT1'])){
			$a = "SELECT `inv_nr`, `pavadinimas`, `statusas`, `patikros_data`  FROM `inventorius` WHERE `inventoriaus_id` = '".$_POST['id']."'";			
			$q = $pdo->prepare($a);
			$q-> execute();
			$row = $q->fetch(PDO::FETCH_ASSOC);
			$q2 = "INSERT INTO `ataskaita` (`inv_nr`, `aprasas`) VALUES ('".$row['inv_nr']."', 'Pavadinimmas: ".$row['pavadinimas']." -> ".$_POST['pavadinimas']." \n Statusas: ".$row['statusas']." -> ".$_POST['statusas']." \n Patikros data: ".$row['spatikros_data']." -> ".$_POST['patikros_data']."')";			
			$stmt3 = $pdo->prepare($q2);
			$stmt3->execute();
			
			$q = "UPDATE `inventorius` SET `pavadinimas` = '".$_POST['pavadinimas']."', `statusas` = '".$_POST['statusas']."', `patikros_data` = '".$_POST['patikrosdata']."' WHERE `inventoriaus_id` = '".$_POST['id']."'";
			//var_dump($q);
			$stmt = $pdo->prepare($q);
			$stmt->execute();
			header("Location: inventoriauskatalogas.php");
			return;
		}
?>	
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Roskosmos Inventoriaus Valdymas</title>
	
	<link rel="stylesheet" href="css/inventorius.css">
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
<h2 style="position: absolute;left: 230px;">Inventoriaus valdymas</h2>
			<div class="form-non-popup">
			  <form class="form-container" method="post">
				<h2>Redaguoti inventorių</h2>
				<h3>Pavadinimas: </h3>
				<input value="<?php echo $results['pavadinimas']; ?>" name="pavadinimas" type="text">
				<?php //var_dump($q); ?>
				<h3 for="statusas">Statusas:(yra <?php echo $results['statusas']; ?>) <h3>
				  <select id="statusas" name="statusas">
					<option value="Naudojama">Naudojama</option>
					<option value="Sandelyje">Sandėlyje</option>
					<option value="Remontuojama">Remontuojama</option>
				  </select>
				<h3>Įsigijimo data: </h3>
				<input type="date" name="isigijimodata"	value="<?php echo $results['isigijimo_data']; ?>" min="2020-01-01" max="2030-12-31" disabled>
				<h3>Patikros data: </h3>
				<input type="date" name="patikrosdata"	value="<?php echo $results['patikros_data']; ?>" min="2020-01-01" max="2030-12-31">
				<h3>Inventorizacijos numeris: </h3>
				<input value="<?php echo $results['inv_nr']; ?>" name="invnr" type="text" disabled>
				<input type="hidden" value="<?php echo $results['inventoriaus_id']; ?>" name="id">
				<input class="btn" name="EDIT1" type="submit" value="Išsaugoti pakeitimus">
			  </form>
			</div>		
</body>
</html>