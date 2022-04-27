<?php

    


$servername="localhost";
$username="root";
$password="";
$db="contacts";



//Create connection 
$conn = new mysqli($servername,$username,$password,$db);
if(!$conn){
    die("connection to this database failed due to".mysqli_connect_error());

}
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$Email=$_POST['Email'];
$City=$_POST['City'];

$Zip=$_POST['Zip'];

$sql="INSERT INTO `contacts`.`people`(`First name`,`Last name`,`Email`,`City`,`Zip`) VALUES('$firstname','$lastname','$Email','$City','$Zip')";

if($conn->query($sql)==true){
    echo "successfully inserted";
    
}
else{
    echo "ERROR:$sql<br>$conn->error";
}
$conn->close();

?>

