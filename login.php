<?php
ob_start(); // Output buffering to avoid header errors

include "conn.php";
session_start();

if (isset($_SESSION['auth']) && $_SESSION['auth'] == 1) {
    header("location: index.php");
    exit;
}

// Implement a mechanism to limit failed login attempts
$maxFailedAttempts = 50;
if (isset($_SESSION['failedAttempts']) && $_SESSION['failedAttempts'] >= $maxFailedAttempts) {
    echo "Too many failed login attempts. Please try again later.";
    exit;
}

if (isset($_POST['submit'])) {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'];

    // Use prepared statements to avoid SQL injection.
    $loginquery = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($loginquery);
    
    // Bind the parameter using bindValue() or pass an array to execute()
    $stmt->bindValue(1, $email, PDO::PARAM_STR);
    //$stmt->execute([$email]); // Alternatively, you can use this method to bind and execute.

    $stmt->execute();
    $loginres = $stmt->fetchAll(PDO::FETCH_ASSOC);
    

    if (count($loginres) > 0) {
        $result = $loginres[0];
        $hashedPassword = $result['pass'];
        

        if (password_verify($password, $hashedPassword)) {
            $username = $result['firstname'];
            //$userid = $result['phonenumber'];

            $_SESSION['username'] = $username;
            //$_SESSION['phonenumber'] = $userid;
            $_SESSION['auth'] = 1;
            $_SESSION['failedAttempts'] = 0; // Reset failed attempts on successful login

            // Regenerate session ID to mitigate session fixation attacks
            session_regenerate_id();

            header("location: index.php");
            exit;
        } else {
            echo "Invalid password";
            $_SESSION['failedAttempts'] = isset($_SESSION['failedAttempts']) ? $_SESSION['failedAttempts'] + 1 : 1;
        }
    } else {
        echo "Invalid email";
        $_SESSION['failedAttempts'] = isset($_SESSION['failedAttempts']) ? $_SESSION['failedAttempts'] + 1 : 1;
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css" />
    <title>Login</title>
</head>
<body>
    <div class="container">
        <form action="login.php" method="post">
          <div class="title">Login</div>
          <div class="input-box underline">
            <input type="text" placeholder="Enter Your Email" name="email" required />
            <div class="underline"></div>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Enter Your Password" name="password" required />
            <div class="underline"></div>
          </div>
          <div class="input-box button">
            <input type="submit" name="submit" value="Continue" />
          </div>
          <div class="other">
            <p>
                <a href="resetPassword.php">Forgot password?</a>
                <span class="space" style="padding: 0% 3vh;"></span> <a href="sign.php"> Create an Account</a>
            </p>
          </div>
        </form>
</body>
</html>