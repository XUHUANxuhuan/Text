<?php
	include "public.php";

	$content = $_REQUEST["content"];
	$where = $_REQUEST["where"];
	$idea = $_REQUEST["idea"];
	$id = $_REQUEST["qid"];


	$sql = "UPDATE `dbank` SET `content`='$content',`where`='$where',`idea`='$idea' WHERE qid=$id";

	$rows = mysqli_query($conn,$sql);

	if($rows){
		echo json_encode(array("status"=>1,"info"=>"成功"));
	}else{
		echo json_encode(array("status"=>0,"info"=>"失败"));
	}
?>