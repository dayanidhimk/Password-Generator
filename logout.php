<?php

$conn = mysqli_connect('localhost','root','','user_db');

session_start();
session_unset();
session_destroy();

header('location:login_form.php');

?>