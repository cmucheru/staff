<?php
$host = '127.0.0.1';
$dbname = 'staff_management';
$username = 'staff_user';
$password = 'staff_pass';
$port = 3306; 

$conn = new mysqli($host, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
