<?php
$host = "dpg-d7p5bas48j3c73abogg0-a";
$port = "5432";
$dbname = "demons";
$user = "demons_user";
$password = "FbtS0pSPc43RJTpWinJcv4u8FxreksEn";

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>