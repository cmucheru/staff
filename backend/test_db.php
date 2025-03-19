<?php
require 'config/db.php';

$sql = "SELECT * FROM staff";
$result = $conn->query($sql);

if ($result) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["full_names"] . "<br>";
    }
} else {
    echo "Query failed: " . $conn->error;
}

$conn->close();
?>
