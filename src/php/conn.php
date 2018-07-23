<?php
$user = $_POST["user"];
$pwd = $_POST["pwd"];
$conn = new mysqli("localhost:3306", "root", "", "denglu");
$sql = "select count(*) as num from tabel1 where username = '".$user."' and password = '".$pwd."'";
$result = $conn->query($sql);
$row=$result->fetch_assoc();
if($row["num"]!=0){
//	$sql = "insert into tabel1 (username,password) value ('".$user."','".$pwd."')";
//	$conn->query($sql);
	echo 1;
}else{
	echo 0;
}
?>