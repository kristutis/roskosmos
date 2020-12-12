<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
	$sandelioId = 1;

?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Roskosmos Ataskaitos</title>
	
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
<table id="prekesTable" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
				<th>Vartotojo ID</th>
            </tr>
        </thead>
        <tbody>
			<?php
				$sql = $pdo->prepare("SELECT * FROM vartotojas");
				$sql->execute();
				while ( $row = $sql->fetch(PDO::FETCH_ASSOC) ) {?>
					<tr>
						<td>ID: 
							<?php echo $row['id']; ?>
							<table id="prekesTable" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
				<th>Prekes ID</th>
				<th>Saskaitos ID</th>
				<th>Kaina</th>
				<th>Atsiskaitymo būdas</th>
				<th>Adresas</th>
            </tr>
        </thead>
        <tbody>
			<?php
				$id = $row['id'];
				$sqls = $pdo->prepare("SELECT * FROM uzsakymas WHERE fk_vartotojo_id = :id");
				$sqls->bindParam(':id', $id);
				$sqls->execute();
				while ( $rows = $sqls->fetch(PDO::FETCH_ASSOC) ) { ?>
					<tr>
						<td>
							<?php echo $rows['fk_prekes_id']; ?>
							</td>
							<td>
							<?php echo $rows['fk_saskaitos_id']; ?>
							</td>
							<td>
							<?php echo round($rows['kaina'], 2); ?>$
							</td>
							<td>
							<?php echo $rows['adresas']; ?>
							</td>
							<td>
							<?php echo $rows['atsiskaitymo_budas']; ?>
						</td>
					</tr>
				<?php }
			?>
		</tbody>
	</table>
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
	$("#uzsakymai").addClass("active");
	$("#prekesTable").DataTable();
});
</script> 
</html>