<?php
require_once '../models/staff.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$staff = new Staff();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    if ($staff->addStaff($data)) {
        echo json_encode(['message' => 'Staff added successfully!']);
    } else {
        echo json_encode(['message' => 'Failed to add staff.']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo json_encode($staff->getStaff());
} elseif ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    if ($staff->updateStaff($data)) {
        echo json_encode(['message' => 'Staff updated successfully!']);
    } else {
        echo json_encode(['message' => 'Failed to update staff.']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    if ($staff->deleteStaff($data['index_number'])) {
        echo json_encode(['message' => 'Staff deleted successfully!']);
    } else {
        echo json_encode(['message' => 'Failed to delete staff.']);
    }
} else {
    echo json_encode(['message' => 'Invalid request method']);
}
?>
