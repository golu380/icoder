<?
echo "hello world";
$servername="loacalhost";
$username="root";
$password="";
$db="mydatabase";
$conn=mysqli_connect($servername,$username,$password,$db)
if(!$conn){
    die("Connection failed: ". mysqli_connect_error());

}
echo "Connected successfully";


?>