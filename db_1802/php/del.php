<?php
	include "public.php";

	$id = $_REQUEST["id"];

	$sql = "delete from `dbank` where qid=$id";

	$rows = mysqli_query($conn,$sql);

	if($rows){
		echo json_encode(array("status"=>1,"info"=>"成功"));
	}else{
		echo json_encode(array("status"=>0,"info"=>"失败"));
	}
?>