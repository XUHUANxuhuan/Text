<?php
	include "public.php";

	$sql = "select * from `dbank`";

	$res = mysqli_query($conn,$sql);

	$data = array(array("status"=>1),array());

	while($arr = mysqli_fetch_assoc($res)){
		//将数据添加到数组中去
		array_push($data[1],$arr);
	}

	echo json_encode($data)
?>