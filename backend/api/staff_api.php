<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $sql = "SELECT * FROM staff";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();

    $staff = [];
    while ($row = $result->fetch_assoc()) {
        $staff[] = $row;
    }

    echo json_encode($staff);
} 
elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (
        isset($data['index_number']) && isset($data['full_names']) &&
        isset($data['email']) && isset($data['current_location']) &&
        isset($data['highest_level_of_education']) && isset($data['duty_station'])
    ) {
        $sql = "INSERT INTO staff (index_number, full_names, email, current_location, highest_level_of_education, duty_station)
                VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param(
            "ssssss",
            $data['index_number'],
            $data['full_names'],
            $data['email'],
            $data['current_location'],
            $data['highest_level_of_education'],
            $data['duty_station']
        );

        if ($stmt->execute()) {
            echo json_encode(["message" => "Staff member added successfully"]);
        } else {
            echo json_encode(["message" => "Failed to add staff member"]);
        }
    } else {
        echo json_encode(["message" => "Invalid data provided"]);
    }
} 
elseif ($method === "PUT") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (
        isset($data['index_number']) && isset($data['full_names']) &&
        isset($data['email']) && isset($data['current_location']) &&
        isset($data['highest_level_of_education']) && isset($data['duty_station'])
    ) {
        $sql = "UPDATE staff SET full_names=?, email=?, current_location=?, highest_level_of_education=?, duty_station=? WHERE index_number=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param(
            "sssssi",
            $data['full_names'],
            $data['email'],
            $data['current_location'],
            $data['highest_level_of_education'],
            $data['duty_station'],
            $data['index_number']
        );

        if ($stmt->execute()) {
            echo json_encode(["message" => "Staff member updated successfully"]);
        } else {
            echo json_encode(["message" => "Failed to update staff member"]);
        }
    } else {
        echo json_encode(["message" => "Invalid data provided"]);
    }
} 
elseif ($method === "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['index_number'])) {
        $sql = "DELETE FROM staff WHERE index_number=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $data['index_number']);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Staff member deleted successfully"]);
        } else {
            echo json_encode(["message" => "Failed to delete staff member"]);
        }
    } else {
        echo json_encode(["message" => "Invalid data provided"]);
    }
} 
else {
    echo json_encode(["message" => "Invalid request method"]);
}
?>
