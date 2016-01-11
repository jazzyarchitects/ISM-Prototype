<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Feedback</title>
</head>
<body>

<?php

define('DB_HOST','localhost');
define('DB_USER','ism_prototype');
define('DB_PASSWORD','ism_prototype');
define('DB_DATABASE','ism_prototype');


$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE) or die("Error Connecting to db ");

$fname=$_POST['fb_name'];
$email=$_POST['fb_email'];
$feedback=$_POST['fb_feedback'];


$query="INSERT INTO feedback(Name, Email, feedback) VALUES('$fname', '$email', '$feedback')";
$result=mysqli_query($dbc,$query) or die("Error Querrying");

echo '<script>alert("Your Feedback Recorded Successfully")</script>';

mysqli_close($dbc) or die("Error Closing");
header("Location: ../index.html");


?>

















</body>
</html>