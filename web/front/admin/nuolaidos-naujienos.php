<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}
	
	if (isset($_POST["ADD-NUOLAIDA"])){
		$sql = "INSERT INTO nuolaida (kategorija, nuolaidos_proc) VALUES (:kat, :proc)";
		$stmt = $pdo->prepare($sql);
		$stmt->execute(array(
				':kat' => $_POST["kategorija"],
				':proc' => $_POST["procentai"]));
		header("Location: nuolaidos-naujienos.php");
		return;
	}
	if (isset($_POST["ADD-NAUJIENA"])){
		$sql = "INSERT INTO naujiena (nuotraukos_url, turinys) VALUES (:url, :tur)";
		$stmt = $pdo->prepare($sql);
		$stmt->execute(array(
				':url' => $_POST["nuotrauka"],
				':tur' => $_POST["turinys"]));
		header("Location: nuolaidos-naujienos.php");
		return;
	}
	
	if (isset($_POST["DELETE-DISC"]) && isset($_POST['disc_id'])){
		$sql = $pdo->prepare("DELETE FROM nuolaida WHERE id = :disc_id");
		$sql->execute(array(":disc_id" => $_POST['disc_id']));
		header("Location: nuolaidos-naujienos.php");
		return;
	}
	
	if (isset($_POST["DELETE-NEWS"]) && isset($_POST['news_id'])){
		$sql = $pdo->prepare("DELETE FROM naujiena WHERE id = :news_id");
		$sql->execute(array(":news_id" => $_POST['news_id']));
		header("Location: nuolaidos-naujienos.php");
		return;
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Roskosmos nuolaidos ir naujienos</title>
	
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
	<h1>Nuolaidos ir naujienos</h1>
	<div class="row">
		<div style="border-right: 1px solid #3d3d3d" class="col-6">
			<h2>Nuolaidos:</h2>
			<table id="nuolaidosTable" class="table table-striped table-bordered" style="width:100%">
				<thead>
					<tr>
						<th>Kategorija</th>
						<th>Nuolaidos procentai</th>
						<th>Veiksmai</th>
					</tr>
				</thead>
				<tbody>
					<?php 
						$sql = "SELECT * FROM nuolaida";
						$stmt = $pdo->query($sql);
						while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) { ?>
							<tr>
								<td><?php echo $row['kategorija']; ?></td>
								<td><?php echo $row['nuolaidos_proc']."%"; ?></td>
								<td>
									<form method="post">
										<input type="hidden" value="<?php echo $row['id']; ?>" name="disc_id">
										<input style="width:100%" name="DELETE-DISC" type="submit" class="btn btn-danger" value="Ištrinti">
									</form>
								</td>
							</tr>
						<?php }
					?>
				</tbody>
			</table>
			
			<hr><h2>Pridėti naują nuolaidą:</h2><hr>
			<form method="post">
				<div class="mt-20">
					<label for="kategorija"><h3>Kategorija:</h3></label>
					<select style="font-size: 14px" class="form-control" name="kategorija">
						<optgroup>
							<option value="papildai">Papildai</option>
							<option value="vitaminai">Vitaminai</option>
							<option value="bcaa">BCAA</option>
							<option value="proteinas">Proteinas</option>
							<option value="preworkout">Preworkout</option>
						</optgroup>
					</select>
				</div>
				<br>
				<div class="mt-20">
					<label for="procentai"><h3>Nuolaidos procentai:</h3></label>
					<input type="number" class="form-control" name="procentai" required>
				</div>
				
				<input type="submit" class="btn btn-success" name="ADD-NUOLAIDA" value="Pridėti">
			</form>
		</div>
		
		<div style="border-left: 1px solid #3d3d3d" class="col-6">
			<h2>Naujienos:</h2>
			<table id="naujienosTable" class="table table-striped table-bordered" style="width:100%">
				<thead>
					<tr>
						<th>Nuotrauka</th>
						<th>Turinys</th>
						<th>Veiksmai</th>
					</tr>
				</thead>
				<tbody>
					<?php 
						$sql = "SELECT * FROM naujiena";
						$stmt = $pdo->query($sql);
						while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) { ?>
							<tr>
								<td><img width="150px" src="<?php echo $row['nuotraukos_url']; ?>"></td>
								<td><?php echo $row['turinys']; ?></td>
								<td>
									<form method="post">
										<input type="hidden" value="<?php echo $row['id']; ?>" name="news_id">
										<input style="width:100%" name="DELETE-NEWS" type="submit" class="btn btn-danger" value="Ištrinti">
									</form>
								</td>
							</tr>
						<?php }
					?>
				</tbody>
			</table>
			<hr><h2>Pridėti naują naujieną:</h2><hr>
			<form method="post">
				<div class="mt-20">
					<label for="nuotrauka"><h3>Nuotraukos url:</h3></label>
					<input type="text" class="form-control" name="nuotrauka" required>
				</div>
				<br>
				<div class="mt-20">
					<label for="turinys"><h3>Trumpas tekstas apie naujieną: </h3></label>
					<input type="text" class="form-control" name="turinys" required>
				</div>
				
				<input type="submit" class="btn btn-success" name="ADD-NAUJIENA" value="Pridėti">
			</form>
		</div>
	</div>
</div>

</body>

<script>
$(document).ready(function(){
	$("#nuol-nauj").addClass("active");
	$("#nuolaidosTable").DataTable();
	$("#naujienosTable").DataTable();
});
</script> 

</html>