<?php

	function getWeekDay($currDate){
		return date("D", strtotime($currDate));
	}
	
	function convertToNumber($day){
		switch($day) {
			case "Mon":
				return 0;
			case "Tue":
				return 1;
			case "Wed":
				return 2;
			case "Thu":
				return 3;
			case "Fri":
				return 4;
			case "Sat":
				return 5;
			case "Sun":
				return 6;
		}
	}

	include_once("pdo.php");
	if (isset($_POST["RESERVE"])){
		$sql = "SELECT * FROM rezervaciju_laikai ORDER BY kuri_diena DESC";
		$stmt = $pdo->query($sql);
		$row = $stmt->fetch(PDO::FETCH_ASSOC);
		
		$seniausia = date("Y-m-d", strtotime($row["kuri_diena"]));
		$dienu_kiekis = $_POST["day-amount"];
		$people = $_POST["people-amount"];
		
		$currDate=date("Y-m-d", strtotime($seniausia . '+1 day'));
		
		$sql = "SELECT * FROM sporto_sale";
		$stmt = $pdo->query($sql);
		$sale = $stmt->fetch(PDO::FETCH_ASSOC);
	
		$darbo_laikai = explode(";", $sale["darbo_laikas"]);
		
		$i = 0;
		while($i != $dienu_kiekis){
			$index = convertToNumber(getWeekDay($currDate));
			$laikas = explode("-", $darbo_laikai[$index]);
			$currTime = $laikas[0];
			
			while (strtotime($currTime) < strtotime($laikas[1])){
				$nuo = $currTime;
				$currTime = date("H:i", strtotime($currTime . '+1 hour'));
				$iki = $currTime;
				$data = $currDate;
				
				$sql = "INSERT INTO rezervaciju_laikai (laikas_nuo, laikas_iki, kuri_diena, zmoniu_skaicius) VALUES (:nuo, :iki, :data, :zmn)";
				$stmt = $pdo->prepare($sql);
				$stmt->execute(array(
						':nuo' => $nuo,
						':iki' => $iki,
						':data' => $data,
						':zmn' => $people)); 
			}
			$currDate=date("Y-m-d", strtotime($currDate . '+1 day'));
			$i++;
		}
		header("Location: sporto-sale.php");
		return;
	}
?>