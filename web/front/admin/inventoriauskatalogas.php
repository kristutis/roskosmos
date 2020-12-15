<?php
	include_once("pdo.php");
	if (!isset($_COOKIE["login"]["Auser"]) || !isset($_COOKIE["login"]["Apass"])){
		header("location: login.php");
	}	
	//var_dump($_POST);

		if (isset($_POST["ADD"])){
			if (empty($_POST['statusas']) && empty($_POST['isigijimodata']) && empty($_POST['patikrosdata']) && empty($_POST['pavadinimas']) && empty($_POST['invnr'])){
				$message = "Užpildyti ne visi reikalingi duomenys!";
				echo "<script type='text/javascript'>alert('$message');</script>";
			} 
		else {
					$q = "INSERT INTO `inventorius` (`pavadinimas`, `statusas`, `isigijimo_data`, `patikros_data`, `inv_nr`, `fk_sales_id`)
					VALUES ('".$_POST['pavadinimas']."', '".$_POST['statusas']."', '".$_POST['isigijimodata']."', '".$_POST['patikrosdata']."', '".$_POST['invnr']."', 1)";
					//var_dump($q);
					$stmt = $pdo->prepare($q);
					$stmt->execute();
					$q2 = "INSERT INTO `ataskaita` (`inv_nr`, `aprasas`) VALUES ('".$_POST['invnr']."', 'Inentoriaus elementas buvo pridėtas')";			
					$stmt3 = $pdo->prepare($q2);
					$stmt3->execute();
					header("Location: inventoriauskatalogas.php");
					return;
				}
		}
		//if (isset($_POST['EDIT']){
		//header("Location: inventoriausEdit.php?edit_id=".htmlentities($row['inventoriaus_id'])) }
		/*$q = $pdo->prepare("SELECT * FROM inventorius");
				$q-> execute();
				$results = $q->fetch();
		/*$q = $pdo->prepare("SELECT * FROM inventorius WHERE id = :var_id");
				$q->bindParam(':var_id', $_GET["inventid"]);
				$q-> execute();
				$results = $q->fetch();*/
		/*if (isset($_POST["EDIT"]) && isset($_POST['var_id'])){
			$sql = $pdo->prepare("SELECT pavadinimas, inv_id FROM inventorius WHERE inventoriaus_id = :var_id");
			$sql->bindParam(':var_id', $_POST['var_id']);
			$sql-> execute();
			$result = $sql -> fetch();
			$sql = $pdo->prepare("UPDATE inventorius SET laisva_vieta = laisva_vieta + :prekes WHERE id = :var_id");
			$sql->execute();
			header("Location: inventoriausEdit.php" ? id = );
			return;
		}
		
		/*---------------------------------------------------------------------------------------------------------------------------------------------------------------*/
		/*-----------DELETE----------------------------------------------------------------------------------------------------------------------------------------------*/		
		/*---------------------------------------------------------------------------------------------------------------------------------------------------------------*/
		if (isset($_POST["DELETE1"])){
			$a = "SELECT `inv_nr`  FROM `inventorius` WHERE `inventoriaus_id` = '".$_POST['invdelete']."'";			
			$q = $pdo->prepare($a);
			$q-> execute();
			$row = $q->fetch(PDO::FETCH_ASSOC);
			$q2 = "INSERT INTO `ataskaita` (`inv_nr`, `aprasas`) VALUES ('".$row['inv_nr']."', 'Inentoriaus elementas buvo ištrintas')";			
			$stmt3 = $pdo->prepare($q2);
			$stmt3->execute();
			
			$q = "DELETE FROM `inventorius` WHERE `inventoriaus_id` = '".$_POST['invdelete']."'"; 
			$stmt = $pdo->prepare($q);
			$stmt->execute();	
			header("Location: inventoriauskatalogas.php");
			return;
		}
		
		/*---------------------------------------------------------------------------------------------------------------------------------------------------------------*/
		/*-----------REPORT-BROKEN---------------------------------------------------------------------------------------------------------------------------------------*/		
		/*---------------------------------------------------------------------------------------------------------------------------------------------------------------*/
		if (isset($_POST["BROKEN"])){
			
			require_once("mailingAPI.php");
		
			$mail->Subject = $_POST["subject"];
			$mail->Body = $_POST["content"];
			
			$sql = "SELECT * FROM `vartotojas` WHERE `role` = 'TRENERIS'";
			$stmt = $pdo->query($sql);
			while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
				$mail->AddAddress($row["email"]);
			}
			
			$mail->Send();
			
			$a = "SELECT `inv_nr`, `statusas`  FROM `inventorius` WHERE `inventoriaus_id` = '".$_POST['idbroken']."'";			
			$q = $pdo->prepare($a);
			$q-> execute();
			//var_dump($q);
			$row = $q->fetch(PDO::FETCH_ASSOC);
			//var_dump($row);
			$q2 = "INSERT INTO `ataskaita` (`inv_nr`, `aprasas`) VALUES ('".$row['inv_nr']."', 'Statusas: ".$row['statusas']." -> Gedimas')";			
			$stmt3 = $pdo->prepare($q2);
			//var_dump($q2);
			$stmt3->execute();
			//var_dump($stmt3);
			$q3 = "UPDATE `inventorius` SET `statusas` = '".$_POST['brknstatusas']."' WHERE `inventoriaus_id` = '".$_POST['idbroken']."'";
			$stmt = $pdo->prepare($q3);
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

			<button class="open-button-add" onclick="openForm()">Pridėti naują inventorių</button>
			<button class="open-button-edit" onclick="openForm1()">Redaguoti inventorių</button>
			<button class="open-button-delete" onclick="openForm2()">Nurašyti inventorių</button>
			<button class="open-button-check" onclick="openForm3()">Patikros grafikas</button>
			<button class="open-button-analyze" onclick="openForm4()">Inventoriaus ataskaita</button>
			<button class="open-button-broken" onclick="openForm5()">Registruoti gedimą</button>
			
		<table id="inventorius" class=" form-table" style="width 825px, max-width=825">
			<thead>
				<tr>
					<th></th>
					<th>Pavadinimas</th>
					<th>Statusas</th>
					<th>Įsigijimo data</th>
					<th>Patikros data</th>
					<th>Inventorizacijos nr.</th>
				</tr>
			</thead>
			<tbody>
				<?php
					$t = 0;
					$q = $pdo->prepare("SELECT * FROM inventorius");
					$q-> execute();
					//$results = $q->fetch();
					while ( $row = $q->fetch(PDO::FETCH_ASSOC) ) { ?>
						<tr> 
							<?php ?>
							<td><?php echo $t = $t + 1?></td>
							<td><?php echo $row['pavadinimas']; ?></td>
							<td><?php echo $row['statusas']; ?></td>
							<td><?php echo $row['isigijimo_data']; ?></td>
							<td><?php echo $row['patikros_data']; ?></td>
							<td><?php echo $row['inv_nr']; ?></td>
						</tr>
					<?php }
				?>
			</tbody>
		</table>
			
			<div class="form-popup" id="myForm">
			  <form class="form-container" method="post">
				<h2>Pridėti inventorių</h2>
				<h3>Pavadinimas: </h3>
				<input value="" name="pavadinimas" type="text" required/>
				<h3 for="statusas">Statusas: <h3>
				  <select id="statusas" name="statusas" required>
					<option value="Naudojama">Naudojama</option>
					<option value="Sandelyje">Sandėlyje</option>
				  </select>
				<h3>Įsigijimo data: </h3>
				<input type="date" name="isigijimodata"	value="Today" min="2020-01-01" max="2030-12-31" required>
				<h3>Patikros data: </h3>
				<input type="date" name="patikrosdata"	value="Today" min="2020-01-01" max="2030-12-31" required>
				<h3>Inventorizacijos numeris: </h3>
				<input value="" name="invnr" type="text" required/>
				<input class="btn" name="ADD" type="submit" value="Pridėti">
				<button type="button" class="btn cancel" onclick="closeForm()">Uždaryti</button>
			  </form>
			</div>
			
			<!----------------------------------------------------------------------------------------------------------------------------------------------------->
			
			<div class="form-popup" id="myForm1">
				<form class="form-container" method="post" action="inventoriausEdit.php">
				<h2>Redaguoti inventorių</h2>
				
				<h3>Inventoriaus sąrašas: </h3>
				<select id="invsar" name="invsar" onchange="myFunction()">
					<?php
						$t = 0;
						$q = $pdo->prepare("SELECT * FROM inventorius");
						$q-> execute();
						while ( $row = $q->fetch(PDO::FETCH_ASSOC) )
						{    
							$t = $t + 1;
							echo '<option value='.$row['inventoriaus_id'].'>'.$t.' | '.$row['pavadinimas'].'</option>';
						}
					?>
				</select><br>
					<input type="hidden" value="<?php echo $row['inventoriaus_id']; ?>" name="edit_id">
					<input name="EDIT" type="submit" class="btn" value="Redaguoti">
					<button type="button" class="btn cancel" onclick="closeForm()">Uždaryti</button>
				</form>
				
			  
			</div>
			
			<!----------------------------------------------------------------------------------------------------------------------------------------------------->
			
			<div class="form-popup" id="myForm2">
			  <form class="form-container" method="post">
				<h2>Nurašyti inventorių</h2>

				<h3>Inventoriaus sąrašas: </h3>
				<select for="invdelete" id="invdelete" name="invdelete">
					<?php
						$t = 0;
						$q = $pdo->prepare("SELECT * FROM inventorius");
						$q-> execute();
						while ( $row = $q->fetch(PDO::FETCH_ASSOC) )
						{    
							$t = $t + 1;
							echo '<option value='.$row['inventoriaus_id'].'>'.$t.' | '.$row['pavadinimas'].'</option>';
						}
					?>
				</select>
				<br>
				<input class="btn" name="DELETE1" type="submit" value="Naikinti">
				<button type="button" class="btn cancel" onclick="closeForm2()">Uždaryti</button>
			  </form>
			</div>
			<!----------------------------------------------------------------------------------------------------------------------------------------------------->
			<div class="form-popup" id="myForm3">
			  <form class="form-container">
				<h2>Registruoti patikrą</h2>
				<!--
				<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FVilnius&amp;src=bTI5bXIybHFtbzcyb2dlMTZyZHF1MGg1bWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%238E24AA&amp;showTz=0&amp;showCalendars=1&amp;showPrint=0&amp;showNav=0&amp;showTitle=0&amp;showTabs=1" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
				-->
				<label for="patikros_data"><b>Patikros data:</b></label>
				<input type="date" placeholder="Pasirinkite datą" name="patikros_data" required><br>

				<input type="submit" class="btn" value="Registruoti">
				<button type="button" class="btn cancel" onclick="closeForm3()">Uždaryti</button>
			  </form>
			</div>
			<!----------------------------------------------------------------------------------------------------------------------------------------------------->
			<div class="form-popup" id="myForm4">
			  <form class="form-container" method="get">
				<h2>Inventoriaus ataskaita</h2>				
				<table id="ataskaita" class=" form-table2" style="width 825px, max-width=825">
					<thead>
						<tr>
							<th></th>
							<th>Inventorizacijos nr.</th>
							<th>Data</th>
							<th>Aprašas</th>
						</tr>
					</thead>
					<tbody>
						<?php
							$t = 0;
							$q = $pdo->prepare("SELECT * FROM ataskaita");
							$q-> execute();
							//$results = $q->fetch();
							while ( $row = $q->fetch(PDO::FETCH_ASSOC) ) { ?>
								<tr> 
									<?php ?>
									<td><?php echo $t = $t + 1?></td>
									<td><?php echo $row['inv_nr']; ?></td>
									<td><?php echo $row['data']; ?></td>
									<td><?php print nl2br( $row['aprasas'], true ); ?></td>
								</tr>
							<?php }
						?>
					</tbody>
				</table><br>
				<!--<button type="button" class="btn cancel" onclick="closeForm4()">Uždaryti</button>-->
			  </form>
			</div>
			<!----------------------------------------------------------------------------------------------------------------------------------------------------->
			<div class="form-popup" id="myForm5">
			  <form class="form-container" method="post">
				<h2>Registruoti gedimą</h2>

				<h3>Inventoriaus sąrašas: </h3>
				<select id="idbroken" name="idbroken">
					<?php
						$t = 0;
						$q = $pdo->prepare("SELECT * FROM inventorius WHERE `statusas` = 'Naudojama'");
						$q-> execute();
						while ( $row = $q->fetch(PDO::FETCH_ASSOC) )
						{    
							$t = $t + 1;
							echo '<option value='.$row['inventoriaus_id'].'>'.$t.' | '.$row['pavadinimas'].'</option>';
						}
					?>
				</select><br>
				<input type="hidden" value="Gedimas" name="subject">
				<input type="hidden" value="Salės inventoriuje buvo rastas gedimas. Sugedęs inventorius bus pažymėtas „Nenaudoti“ žyme arba perkeltas į sandėlį." name="content">
				<input type="hidden" value="Gedimas" name="brknstatusas">
				<input name="BROKEN" type="submit" class="btn" value="Registruoti gedimą">
				<button type="button" class="btn cancel" onclick="closeForm5()">Uždaryti</button>
			  </form>
			</div>
			<!----------------------------------------------------------------------------------------------------------------------------------------------------->
			<script>
				function openForm() {
				  document.getElementById("myForm").style.display = "block";
				  document.getElementById("myForm1").style.display = "none";
				  document.getElementById("myForm2").style.display = "none";
				  document.getElementById("myForm3").style.display = "none";
				  document.getElementById("myForm4").style.display = "none";
				  document.getElementById("myForm5").style.display = "none";
				}
				function openForm1() {
				  document.getElementById("myForm").style.display = "none";
				  document.getElementById("myForm1").style.display = "block";
				  document.getElementById("myForm2").style.display = "none";
				  document.getElementById("myForm3").style.display = "none";
				  document.getElementById("myForm4").style.display = "none";
				  document.getElementById("myForm5").style.display = "none";
				}
				function openForm2() {
				  document.getElementById("myForm").style.display = "none";
				  document.getElementById("myForm1").style.display = "none";
				  document.getElementById("myForm2").style.display = "block";
				  document.getElementById("myForm3").style.display = "none";
				  document.getElementById("myForm4").style.display = "none";
				  document.getElementById("myForm5").style.display = "none";
				}
				function openForm3() {
				  document.getElementById("myForm").style.display = "none";
				  document.getElementById("myForm1").style.display = "none";
				  document.getElementById("myForm2").style.display = "none";
				  document.getElementById("myForm3").style.display = "block";
				  document.getElementById("myForm4").style.display = "none";
				  document.getElementById("myForm5").style.display = "none";
				}
				function openForm4() {
				  document.getElementById("myForm").style.display = "none";
				  document.getElementById("myForm1").style.display = "none";
				  document.getElementById("myForm2").style.display = "none";
				  document.getElementById("myForm3").style.display = "none";
				  document.getElementById("myForm4").style.display = "block";
				  document.getElementById("myForm5").style.display = "none";
				}
				function openForm5() {
				  document.getElementById("myForm").style.display = "none";
				  document.getElementById("myForm1").style.display = "none";
				  document.getElementById("myForm2").style.display = "none";
				  document.getElementById("myForm3").style.display = "none";
				  document.getElementById("myForm4").style.display = "none";
				  document.getElementById("myForm5").style.display = "block";
				}

				function closeForm() {
				  document.getElementById("myForm").style.display = "none";
				}
				function closeForm1() {
				  document.getElementById("myForm1").style.display = "none";
				}
				function closeForm2() {
				  document.getElementById("myForm2").style.display = "none";
				}
				function closeForm3() {
				  document.getElementById("myForm3").style.display = "none";
				}
				function closeForm4() {
				  document.getElementById("myForm4").style.display = "none";
				}
				function closeForm5() {
				  document.getElementById("myForm5").style.display = "none";
				}
					$(document).ready(function(){
				$("#ataskaita").addClass("active");
				$("#ataskaita").DataTable();
				});
			</script>
			<!----------------------------------------------------------------------------------------------------------------------------------------------------->

</body>
</html>