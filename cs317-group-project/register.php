<?php
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
$key = "---";

if ($contentType === "application/json") {
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);

    //If json_decode failed, the JSON is invalid.
    if(is_array($decoded)) {
        $key = $decoded["key"];
    } else {
        $err = array( "status"=>"fail_1", "error"=>"$content");
        die(json_encode($err));
    }
} else {
    die ('{"status":"fail_2"}');
}

$servername = "devweb2021.cis.strath.ac.uk";
$username = "cs317madgroup27";
$password = "jaqu8Mue8Ohs";
$dbname = $username;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die('{"status":"fail_3"}');   //, "error": "'. $conn->error.'"}');
}

$sql = "INSERT IGNORE INTO pushclients (clientkey) VALUES ('".$key."')";

if ($conn->query($sql) === TRUE) {
} else {
    $err = array( "status"=>"fail_4", "error"=>$conn->error);
    die(json_encode($err));
}

$conn->close();

echo '{"status":"ok"}';
