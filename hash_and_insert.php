<?php
// Include the database connection file
include 'db.php';

// Define username and password
$username = 'tapon';
$password = 'tapon007';

// Hash the password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Prepare and execute the SQL statement to insert the user
$stmt = $pdo->prepare('INSERT INTO users (username, password, is_admin) VALUES (:username, :password, :is_admin)');
$stmt->execute(['username' => $username, 'password' => $hashed_password, 'is_admin' => 1]);

echo "Admin user inserted successfully.";
?>
