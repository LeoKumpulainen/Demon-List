<?php
require "db.php";

$stmt = $pdo->query("SELECT * FROM demons ORDER BY placement ASC");
$demons = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($demons);
?>