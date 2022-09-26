<?php
session_start();

$host = "devweb2021.cis.strath.ac.uk";
$user = "cs317madgroup27";
$pass = "jaqu8Mue8Ohs";
$dbname = $user;
$conn = new mysqli($host, $user, $pass, $dbname);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="design.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" sizes="128x128" href="health.jpg">
    <link rel="icon" sizes="192x192" href="health.jpg">
    <title>profile.</title>
</head>

<body class="loggedin lightgrey">
<div class="wrapper">
    <header class="container center padding outline">
        <h1>profile.</h1>
       <p> &#x270C;&#x270C;&#x270C;</p><br><br>
        <p>Your account details are below:</p>
        <p>________________________</p><br><br>
    </header>
        <p>Username: <?=$_SESSION['user']?></p><br>
        <p>Password: ********</p><br>
        <p>Email: youremail@thisaddress.com</p>

    <div id="nav">
        <a href="index.html"> <i class="fa fa-home"></i></a>
        <a href="profile.php" class="active"><i class="fa fa-user"></i></a>
        <a href="chat.php"><i class="fa fa-comment"></i></a>
        <a href="logout.php"><i class="fa fa-sign-out"></i></a>
    </div>

</body>
</html>


