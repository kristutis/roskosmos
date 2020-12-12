<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
	$sandelioId = 1;

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
	<title>Roskosmos sandelys</title>
	
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
	<h1>Prekes sandelyje</h1>
<?php
	if(isset($sandelioId)) {
		$sql = $pdo->prepare("SELECT laisva_vieta FROM sandelys WHERE id = :sandelioId");
		$sql->bindParam(':sandelioId', $sandelioId);
		$sql->execute();
		$results = $sql->fetch();
		?>
	<h2>Laisva vieta sandelyje: <?php echo $results['laisva_vieta'];?><h2>
	<?php }
?>
	<table id="prekesTable" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
				<th>Nuotrauka</th>
                <th>Pavadinimas</th>
                <th>Aprasymas</th>
                <th>Kaina</th>
				<th>Kiekis sandelyje</th>
				<th>Veiksmai</th>
            </tr>
        </thead>
        <tbody>
			<?php
				$sql = $pdo->prepare("SELECT * FROM preke WHERE fk_sandelio_id = :sandelioId");
				$sql->bindParam(':sandelioId', $sandelioId);
				$sql->execute();
				while ( $row = $sql->fetch(PDO::FETCH_ASSOC) ) { ?>
					<tr>
						<td><img src="<?php echo $row['foto'];?>" width="140" height="140"></td>
						<td><?php echo $row['pavadinimas']; ?></td>
						<td><?php echo $row['aprasymas']; ?></td>
						<td><?php echo $row['kaina']; ?>$</td>
						<td><?php echo $row['kiekis_sandelyje']; ?></td>
						<td>
							<form method="post">
								<input type="hidden" value="<?php echo $row['id']; ?>" name="var_id">
								<input style="width:100%" name="DELETE" type="submit" class="btn btn-danger" value="Ištrinti">
							</form>
							<form action="placiau.php" method="get">
								<input type="hidden" value="<?php echo $row['id']; ?>" name="prekeId">
								<input style="width:100%" name="Placiau" type="submit" class="btn btn-primary" value="Plačiau">
							</form>
							<form action="redaguoti.php" method="get">
								<input type="hidden" value="<?php echo $row['id']; ?>" name="prekeId">
								<input style="width:100%" name="EDIT" type="submit" class="btn btn-success" value="Redaguoti">
							</form>
						</td>
					</tr>
				<?php }
			?>
		</tbody>
	</table>
</div>

</body>

<script>
$(document).ready(function(){
	$("#sandelys").addClass("active");
	$("#prekesTable").DataTable();
});
</script> 
</html>