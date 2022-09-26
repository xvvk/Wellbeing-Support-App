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
    <title>chat room.</title>
</head>

<body class="lightgrey">
<div class="wrapper">
    <header class="container center padding outline">
        <h1>chat room.</h1>
        <p>________________________</p><br>
        <p>Chat with the community!</p>
    </header>

    <?php
    $message = strip_tags(isset($_POST["msg"]) ? $_POST["msg"] : "");
    $username = $_SESSION['user'];
    if($message === ""){
    ?>

    <p>Welcome, <?=$username?></p>

<?php
        // issue query
        $query="SELECT messages, name FROM chat ORDER BY ID ASC;";
        $result = $conn->query($query);

        // handle results
        if(!$result) {
            die("Query Failed: " . $conn->error);
        }

        if($result -> num_rows > 0){
        ?>
        <p>________________________</p><br><br>
        <div id="chatbox">

            <?php
            while ($row = $result -> fetch_assoc()) {
                echo "<td>" .$row["name"], ": ", $row["messages"], "\n" . "</td>";
                echo nl2br("\n");
            }
            $conn->close();
        }
            ?>
        </div>

    <form name="message" action="chat.php" method="post">
        <input name="msg" type="text" id="msg" placeholder="type your message."/>
        <input name="submit" type="submit" id="submsg" value="send." onclick="refresh()"/>
    </form>

        <?php
    } else {
            $sql = "INSERT INTO `chat` (`messages`, `name`) VALUES ('$message', '$username')";
            if ($conn->query($sql) === TRUE) {
            }
            ?>

        <?php
        // issue query
        $query="SELECT messages, name FROM chat ORDER BY ID ASC;";
        $result = $conn->query($query);

        // handle results
        if(!$result) {
            die("Query Failed: " . $conn->error);
        }

        if($result -> num_rows > 0){
            ?>

        <p>Welcome, <?=$username?></p><br>
        <div id="chatbox">

            <?php
            while ($row = $result -> fetch_assoc()) {
                echo "<td>" .$row["name"], ": ", $row["messages"], "\n" . "</td>";
                echo nl2br("\n");
            }
        }

            ?>
        </div>
        <form name="message" action="chat.php" method="post">
        <input name="msg" type="text" id="msg" placeholder="type your message."/>
        <input name="submit" type="submit" id="submsg" value="send." onclick="refresh()"   />
        </form>

        <?php
        $conn->close();
    }
        ?>

        <div id="nav">
        <a href="index.html"> <i class="fa fa-home"></i></a>
        <a href="profile.php"><i class="fa fa-user"></i></a>
        <a href="chat.php"><i class="fa fa-comment"></i></a>
        <a href="logout.php"><i class="fa fa-sign-out"></i></a>
    </div>

</div>
<script>function refresh() { window.location.reload();}
</script>

</body>
</html>
