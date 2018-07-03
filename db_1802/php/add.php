<?php
	include "public.php";

	$content = $_POST["content"];
	$where = $_POST["where"];
	$idea = $_POST["idea"];


	$sql = "INSERT INTO `dbank`(`content`, `where`, `idea`) VALUES ('$content','$where','$idea')";

	$rows = mysqli_query($conn,$sql);

	

	if($rows){
		echo json_encode(array("status"=>1,"info"=>"成功"));
	}else{
		echo json_encode(array("status"=>0,"info"=>"失败"));
	}
?>