<?php
/*
if ( !isset($_POST["msg"]) || !isset($_POST["pass"]) ) {
    ?>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
    <form action="bigpush.php" method="post">
        <p>P: <input type="password" name="pass"></p>
        <p>T: <input type="text" name="msg"></p>
        <p><input type="submit"></p>
    </form>
    </body></html>
    <?php
    die("");
} else { // TODO: get message
    $msg = strip_tags($_POST["msg"]);
}

*/
$msg = strip_tags(isset($_POST["time"]) ? $_POST["time"] : "");
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="design.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="apple-touch-icon" sizes="128x128" href="health.jpg">
        <link rel="icon" sizes="192x192" href="health.jpg">
        <title>reminders.</title>
    </head>

    <body class="lightgrey">

    <div id="token"></div>
    <div id="msg"></div>
    <div id="notis"></div>
    <div id="err"></div>
    <button id="register">Register</button>
    <p id="result"></p>

    <div class="wrapper">
        <header class="container center padding outline">
            <h1>reminders.</h1>
            <p>________________________</p><br>
            <p> Always forgetful? Set yourself a reminder!</p><br>
        </header>
        <form id="reminders-form">
            <input type="text" id="input-task" placeholder = "Insert task here"/>
            <input type="time" id="time-task" value="Time task" name="time"/>
            <input type="submit" id="add-task" value="add task"/>
        </form>
        <!-- <button id="permission-btn" onclick="main()">Ask Permission</button> -->
        <br><br>
        <div class="task-list">
            <h2>Tasks:</h2>
            <div id="tasks">
                <!-- <div class="task">
                      <div class="content">
                         <input
                            type="text"
                            class="text"
                            value="user task"
                            readonly
                         />
                     </div>
                     <div class="actions">
                         <button class="edit">Edit</button>
                         <button class="del"> X </button>
                    </div>  -->
            </div>
            <h2> Finished tasks: </h2>
            <div id="finished-tasks">
            </div>
            <div>
                <!--  <form id="test">
                      <input id="takeinput"> Test
                      <button id="button">submit</button>
                  </form>
                  -->
            </div>
        </div>

        <div id="nav">
            <a href="index.html"> <i class="fa fa-home"></i></a>
            <a href="profile.php"><i class="fa fa-user"></i></a>
            <a href="chat.php"><i class="fa fa-comment"></i></a>
            <a href="logout.php"><i class="fa fa-sign-out"></i></a>
        </div>

    </div>
    <script>
        MsgElem = document.getElementById("msg");
        TokenElem = document.getElementById("token");
        NotisElem = document.getElementById("notis");
        ErrElem = document.getElementById("err");
    </script>
    <script src="https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"></script>
    <!-- <script type="module" src="firebase.js"></script> -->
    <script>
        let clientID = "";
        const firebaseConfig = {
            apiKey: "AIzaSyDKfjACn-kRlytcaLOxGSkSX6djQ_Si8EQ",
            authDomain: "cs317-group-project-bce35.firebaseapp.com",
            databaseURL: "https://cs317-group-project-bce35-default-rtdb.firebaseio.com/",
            projectId: "cs317-group-project-bce35",
            storageBucket: "cs317-group-project-bce35.appspot.com",
            messagingSenderId: "1024855949204",
            appId: "1:1024855949204:web:b73ae04fc2c11834851981"
        };

        function ajaxPost(url, opts) {
            console.log('Posting request to '+ url);
            fetch(url, {
                method: 'post',
                body: JSON.stringify(opts),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(resp => resp.json())
                .then(data => {
                    console.log('Reply status:', data.status);
                    console.log("Reply key:", data.test);
                    if (data.status=="ok"){
                        document.getElementById("register").style.display = "none";
                        document.getElementById("result").innerText = "Registered OK";
                        document.getElementById("result").style.color = "green";
                    } else {
                        console.log(data.error)
                        document.getElementById("result").innerText = "Registration failed";
                        document.getElementById("result").style.color = "orange";
                    }
                });
        }
        function sendRegistration(){
            console.log("client id = " + clientID);
            if (clientID!=""){
                ajaxPost("https://devweb2021.cis.strath.ac.uk/~tmb19159/317/register.php", {"key":clientID});
            } else {
                document.getElementById("result").innerText = "No Client ID to register";
                document.getElementById("result").style.color = "orange";
            }
        }
        // init firebase
        firebase.initializeApp(firebaseConfig);

        const messaging = firebase.messaging();

        navigator.serviceWorker.register('firebase.js')
            .then((registration) => {
                messaging.useServiceWorker(registration);
                // Request permission and get token
                messaging
                    .requestPermission()
                    .then(function () {
                        MsgElem.innerHTML = 'Notification permission granted.';
                        console.log('Notification permission granted.');

                        // get the token in the form of promise
                        return messaging.getToken();
                    })
                    .then(function (token) {
                        TokenElem.innerHTML = 'Device token is : <br>' + token;
                        clientID = token;
                        let regButton = document.getElementById("register");
                        regButton.addEventListener("click", sendRegistration);
                        regButton.style.display = "inline";
                    })
                    .catch(function (err) {
                        ErrElem.innerHTML = ErrElem.innerHTML + '; ' + err;
                        console.log('Unable to get permission to notify.', err);
                    });

                let enableForegroundNotification = true;
                messaging.onMessage(function (payload) {
                    console.log('Message received. ', payload);
                    NotisElem.innerHTML =
                        NotisElem.innerHTML + JSON.stringify(payload);
                    if (enableForegroundNotification) {
                        let notification = payload.notification;
                        // notification.title = "default value";
                        navigator.serviceWorker
                            .getRegistrations()
                            .then((registration) => {
                                registration[0].showNotification(notification.title);
                            });
                    }
                });
            });

    </script>
    <script src="reminders.js"></script>
    </body>
    </html>

<?php
//$msg = strip_tags($_POST["msg"]); // TODO: get message

function sendCURL($clientkey, $message){
    // Generated by curl-to-PHP: http://incarnate.github.io/curl-to-php/
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "{ \"data\": { \"notification\": { \"title\": \"CS317 Push\", \"body\": \"$message\" } }, \n  \"to\": \"$clientkey\" }");

    $headers = array();
    $headers[] = 'Authorization: key=AAAA7p4sv5Q:APA91bHs0O5EoRrctWYDZcWUSv_LeS289e7yDzyGV869P8WX346vUXj7ceN6aBN32_iMQyT13bWO2Q7_-gmS50pgDgw66bX3Bv6TA_kX_AaUr2ol7HdlO_lac-Nxan0tWLeBfs9LusOV';
    $headers[] = 'Content-Type: application/json';
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);
    echo "<p>$result</p>\n";
}

$servername = "devweb2021.cis.strath.ac.uk";
$username = "cs317madgroup27";
$password = "jaqu8Mue8Ohs";
$dbname = $username;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM pushclients";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $clientkey = $row["clientkey"];
        echo "To: " . $clientkey  . "<br>";
        sendCURL($clientkey, $msg);
    }
} else {
    echo "0 results";
}
$conn->close();

