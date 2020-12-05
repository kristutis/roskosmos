<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
	if (isset($_POST["DELETE"]) && isset($_POST['trener_id'])){
		$sql = $pdo->prepare("DELETE FROM vartotojas WHERE id = :trener_id");
		$sql->execute(array(":trener_id" => $_POST['trener_id']));
		$sql = $pdo->prepare("DELETE FROM treneris WHERE fk_trenerio_id = :trener_id");
		$sql->execute(array(":trener_id" => $_POST['trener_id']));
		$sql = $pdo->prepare("DELETE FROM trenerio_vertinimai WHERE fk_trenerio_id = :trener_id");
		$sql->execute(array(":trener_id" => $_POST['trener_id']));
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
	<h1>Treneriai:</h1>
	<table id="treneriaiTable" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>Vardas</th>
                <th>Pavarde</th>
                <th>El. paštas</th>
                <th>Veiksmai</th>
            </tr>
        </thead>
        <tbody>
			<?php
				$sql = $pdo->prepare("SELECT * FROM vartotojas WHERE role = :treneris");
				$sql->execute(array(":treneris" => "TRENERIS"));
				while ( $row = $sql->fetch(PDO::FETCH_ASSOC) ) { ?>
					<tr>
						<td><?php echo $row['vardas']; ?></td>
						<td><?php echo $row['pavarde']; ?></td>
						<td><?php echo $row['email']; ?></td>
						<td>
							<form method="post">
								<input type="hidden" value="<?php echo $row['id']; ?>" name="trener_id">
								<input style="width:100%" name="DELETE" type="submit" class="btn btn-danger" value="Ištrinti">
							</form>
						</td>
					</tr>
				<?php }
			?>
		</tbody>
	</table>
	<div class="row justify-content-end">
		<form action="add-treneris.php">
			<input style="font-size: 14px;" type="submit" class="btn btn-success" value="Pridėti naują">
		</form>
	</div>
</div>

</body>

<script>
$(document).ready(function(){
	$("#treneriai").addClass("active");
	$("#treneriaiTable").DataTable();
});
</script> 

</html>