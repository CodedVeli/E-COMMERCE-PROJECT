<?php

include "conn.php";

$result = null;

if (isset($_POST['submit'])) {
  $phoneNumber = $_POST['phoneNumber'];
  $firstName = $_POST['firstName'];
  $secondName = $_POST['secondName'];
  $email = $_POST['email'];
  $pass = $_POST['pass'];
  $confirmPassword = $_POST['confirmPassword'];
  $dateCreated = date("Y-m-d H:i:s");

  if ($pass === $confirmPassword) {
    // Hash the password using the default bcrypt algorithm
    $hashedPass = password_hash($pass, PASSWORD_DEFAULT);

    $insertSql = "INSERT INTO users (phoneNumber, firstName, secondName, email, pass, dateCreated)
      VALUES ('$phoneNumber', '$firstName', '$secondName', '$email', '$hashedPass', '$dateCreated')";

    if ($conn->query($insertSql)) {
      $result = "Account created successfully";
      header("location:login.php");
    } else {
      $result = $conn->error;
    }
  } else {
    $result = "Passwords do not match";
  }
}

echo $result;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sign.css">
    <title>sign up</title>
</head>
<body>
    <div class="container">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
          <div class="title">Sign Up</div>
            <div class="input-box underline">
                <input type="text" placeholder="First Name" name="firstName" required />
                <div class="underline"></div>
              </div>
              <div class="input-box underline">
                <input type="text" placeholder="Second Name" name="secondName" required />
                <div class="underline"></div>
              </div>
              <div class="input-box underline">
                <input type="tel" placeholder="Phone Number" name="phoneNumber" required />
                <div class="underline"></div>
              </div>
              <div class="input-box underline">
                <input type="email" placeholder="Email" name="email" required />
                <div class="underline"></div>
              </div>
              <div class="input-box">
                <input type="password" placeholder="Password" name="pass" required />
                <div class="underline"></div>
              </div>
              <div class="input-box">
                <input type="password" placeholder="Confirm Password" name="confirmPassword" required />
                <div class="underline"></div>
              </div>
              <div class="input-box button">
                <input type="submit" name="submit" value="Create Account" />
              </div>
        </form>
      </div>
</body>
</html>