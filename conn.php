<?php

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "ecomproject";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die($e->getMessage());
}

if ($conn) {
    //echo "database connected";
        //echo "database connected";
    //echo "database connected";

}

?>