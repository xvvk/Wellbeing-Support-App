<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="design.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" sizes="128x128" href="health.jpg">
    <link rel="icon" sizes="192x192" href="health.jpg">
    <title>self care.</title>
</head>

<!-- CREATE AN ACCOUNT PAGE -->

<body class="lightgrey">
<div class="wrapper1" >
    <header class="container center padding outline">
        <h1>create an account.</h1>
        <br><p>Create an account with us here!</p>
        <p>________________________________</p><br>
    </header>


<?php
$username = strip_tags(isset($_POST["user"]) ? $_POST["user"] : "");
$password = strip_tags(isset($_POST["password"]) ? $_POST["password"] : "");
$email = strip_tags(isset($_POST["email"]) ? $_POST["email"] : "");
$confirm_pass = strip_tags(isset($_POST["confirm"]) ? $_POST["confirm"] : "");

if (($username === "") || ($email === "") || empty($email)|| ($password === "") || ($confirm_pass === "") || (!filter_var($email, FILTER_VALIDATE_EMAIL))) {
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        echo "<p> <span style=\"color: red; \"> Some of the fields are empty. Please fill in all the fields.</span></p>";
        }

    ?>
    <form action="create.php" method="POST" class="login">
        <input type="email" class="field" name="email" value="<?php echo $email; ?>" style="width: 250px" placeholder="Email address." required><br>
        <input type="text" class="field" name="user" value="<?php echo $username; ?>" style="width: 250px" placeholder="Username." required><br>
        <input type="password" class="field" name="password" placeholder="Password." style="width: 250px" required><br>
        <input type="password" class="field" name="confirm" placeholder="Confirm password." style="width: 250px" required><br>
        <p>By creating an account, <br> you agree to our <a href="#">Terms & Conditions</a>.</p><br>
        <button class="sub" type="submit">Create.</button>
    </form>
        <?php
    }

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if ($password !== $confirm_pass) {
        echo "<p> <span style=\"color: red; \"> The two passwords do not match.</span></p>";?>
        <br>
        <form action="create.php" method="POST" class="login">
        <input type="email" class="field" name="email" value="<?php echo $email; ?>" style="width: 250px" placeholder="Email address." required><br>
        <input type="text" class="field" name="user" value="<?php echo $username; ?>" style="width: 250px" placeholder="Username." required><br>
        <input type="password" class="field" name="password" placeholder="Password." style="width: 250px" required><br>
        <input type="password" class="field" name="confirm" placeholder="Confirm password." style="width: 250px" required><br>
        <p style="text-align: center" >By creating an account, <br> you agree to our <a href="#">Terms & Conditions</a>.</p><br>
        <button class="sub" type="submit">Create.</button>
        </form>
<?php
    }else {
            $host = "devweb2021.cis.strath.ac.uk";
            $user = "cs317madgroup27";
            $pass = "jaqu8Mue8Ohs";
            $dbname = $user;
            $conn = new mysqli($host, $user, $pass, $dbname);
           //$password = md5($confirm_pass); //encrypt password
            $sql = "INSERT INTO `signups` (`email`, `username`, `password`) VALUES ('$email', '$username', '$password')";

            if ($conn->query($sql) === TRUE) {
                echo "<p> Thank you for creating an account with us, </p>";
                echo "<p> We have sent an email confirmation to the provided email address.</p>";
            } else {
                die ("Error " . $conn->error);
            }
            $conn->close();
            mail($email, "Thank you for signing up!", "Hello " . $username  . ", You can now use your username and password to log into your account!");
        }
}
        ?>

    <br><p>Already have an account? <a href="login.php">Sign in!</a></p>

</div>

</body>
</html>



