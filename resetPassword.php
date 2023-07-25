<?php
if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    if ($password != $confirmPassword) {
        echo "Passwords do not match.";
    } else {
        $sql = "UPDATE users SET password='$password' WHERE email='$email'";
        $result = $conn->query($sql);

        if ($result) {
            echo "Password reset successfully.";
        } else {
            echo "An error occurred. Please try again.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="resetPassword.css">
    <title>reset Password</title>
</head>
<body>
    <div class="container">
        <form action="login.php" method="post">
          <div class="title">Reset Password</div>
          <div class="input-box underline">
            <input type="text" placeholder="Enter Your Email" name="email" required />
            <div class="underline"></div>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Enter New Password" name="password" required />
            <div class="underline"></div>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Confirm New Password" name="comfirmPassword" required />
            <div class="underline"></div>
          </div>
          <div class="input-box button">
            <input type="submit" name="" value="Continue" />
          </div>
        </form>
    </div>
</body>
</html>