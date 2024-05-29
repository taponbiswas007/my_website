<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $message = $_POST['message'];
    $user_id = $_SESSION['user_id'];

    $stmt = $pdo->prepare('INSERT INTO messages (user_id, message) VALUES (?, ?)');
    $stmt->execute([$user_id, $message]);

    echo json_encode(['status' => 'success']);
}
?>
