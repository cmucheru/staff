<?php
include 'config/db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Get all staff
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM staff";
    $result = $conn->query($sql);
    
    $staff = [];
    while ($row = $result->fetch_assoc()) {
        $staff[] = $row;
    }

    echo json_encode($staff);
}

// Add new staff
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $conn->prepare("INSERT INTO staff (index_number, full_names, email, current_location, highest_level_of_education, duty_station, availability_for_remote_work, software_expertise, software_expertise_level, language, level_of_responsibility) 
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param(
        "sssssssssss",
        $data['index_number'],
        $data['full_names'],
        $data['email'],
        $data['current_location'],
        $data['highest_level_of_education'],
        $data['duty_station'],
        $data['availability_for_remote_work'],
        $data['software_expertise'],
        $data['software_expertise_level'],
        $data['language'],
        $data['level_of_responsibility']
    );
    
    $stmt->execute();
    echo json_encode(["success" => true]);
}
?>
