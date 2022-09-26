<?php session_start(); ?>
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


<!-- FRONT PAGE: LOGIN -->

<body class="lightgrey">
<div class="wrapper1">
    <header class="container center padding outline">
        <h1>self care.</h1>
        <p>where you come first.</p>
        <p>________________________</p><br>
    </header>

    <?php
    $host = "devweb2021.cis.strath.ac.uk";
    $user = "cs317madgroup27";
    $pass = "jaqu8Mue8Ohs";
    $dbname = $user;
    $conn = new mysqli($host, $user, $pass, $dbname);

    $username = strip_tags(isset($_POST["user"]) ? $_POST["user"] : "");
    $password = isset($_POST["password"]) ? $conn->real_escape_string($_POST["password"]) : "";
    //$password = md5($password); // encrypt password

    $sql = "SELECT * FROM `signups` WHERE `username` = '$username' AND `password` = '$password'";
    $results = $conn->query($sql);


    ?>
    <form  action="login.php" method="post" class="login">
        <input type="text" name="user" id="name" class="field" placeholder="Username." value="<?php echo $username; ?>" style="width: 250px" required><br>
        <input type="password" name="password" id="pass" class="field" placeholder="Password." style="width: 250px" required><br>
        <input type="submit" value="Login" id="submit" name="loggedin" class="sub">
<?php
        if ($results -> num_rows > 0) {
            $row = $results->fetch_assoc();
            if ($row['username'] === $username && $row['password'] === $password) {
                echo "Logged in!";
                $_SESSION['loggedin'] = TRUE;
                $_SESSION['user'] = $row['username'];
                header("Location: index.html");
            }
            $conn->close();
    }
    ?>
    </form>

    <br><p><a href="reset.html">Forgot your password?</a></p><br>
    <p>Don't have an account? <a href="create.php">Create an account!</a></p><br>

</div>
</body>
</html>


