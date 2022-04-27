<?php

$servername = "localhost";
$username  = "root";
$password = "";

$database = "bata";

$conn = mysqli_connect($servername,$email,$password,$database);

if($conn){
    echo "success";
}else{
    die("Errro".mysqli_connect_error());
}
?>