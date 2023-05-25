<?php

//for displaying errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


    $errors = [];
    $formvalues = [];
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Check if the form was submitted
        if (isset($_POST["sub"])) {
    
            // Validate name
            if (isset($_POST["name"]) && !empty($_POST["name"])) {
                $name = $_POST["name"];
            } else {
                $errors["name"] = "Name is required";
            }
    
            // Validate email  =>  way 1
            if (isset($_POST["email"]) && !empty($_POST["email"])) {
                $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
                if (!$email) {
                    $errors["email"] = "Invalid email address";
                }
            } else {
                $errors["email"] = "Email is required";
            }

            // Validate email  =>  way 2

            if (isset($_POST["email"]) && !empty($_POST["email"])) {
                $email = $_POST["email"];
                if (!preg_match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/", $email)) {
                    $errors["email"] = "Invalid email address";
                }
            } else {
                $errors["email"] = "Email is required";
            }

            // Validate password
            if (isset($_POST["password"]) && !empty($_POST["password"])) {
                $password = $_POST["password"];
                if (!preg_match("/^[a-z_]{8,}$/i", $password)) {
                    $errors["password"] = "Invalid password, should be only 8 lowercase letters & only (_) allowed";
                }
            } else {
                $errors["password"] = "Password is required";
            }
    
            // Validate confirm password
            if (isset($_POST["confirm"]) && !empty($_POST["confirm"])) {
                $confirm_password = $_POST["confirm"];
                if ($confirm_password !== $password) {
                    $errors["confirm"] = "Passwords do not match";
                }
            } else {
                $errors["confirm"] = "Confirm password is required";
            }
    
            // Validate room
            if (isset($_POST["room"]) && !empty($_POST["room"])) {
                $room = $_POST["room"];
            } else {
                $errors["room"] = "NO.ROOM is required";
            }
    
            // Validate image
            if (isset($_FILES["img"]) && !empty($_FILES["img"]["name"])) {
                $file_name = $_FILES["img"]["name"];
                $file_size = $_FILES["img"]["size"];
                $file_tmp = $_FILES["img"]["tmp_name"];
                $file_type = $_FILES["img"]["type"];
    
                $allowed_extenstions=["png", "jpg", "jpeg"];
                $extension = pathinfo($file_name, PATHINFO_EXTENSION);
    
                if (in_array($extension, $allowed_extenstions)) {
                    $imagespath = "images/{$file_name}";
                    $res = move_uploaded_file($file_tmp, $imagespath);
                } else {
                    $errors["img"] = "Invalid image extension, allowed extensions are png, jpg and jpeg";
                }
            } else {
                $errors["img"] = "Image is required";
            }
    
            if (!empty($errors)) {
                $formerrors = json_encode($errors);
                $formvalues = json_encode($_POST);
                header("Location:signup.php?errors={$formerrors}&old={$formvalues}");
                exit;
            }
    
            $date = new DateTime();
            $id = $date->getTimestamp();
            $user_info = "{$id}:{$name}:{$email}:{$password}:{$room}:{$imagespath}";
    
            try {
                $filehandler = fopen("users.txt", "a");
                fwrite($filehandler, $user_info . PHP_EOL);
                fclose($filehandler);
    

     header("Location:login.php");

    }catch(Exception $e){
       var_dump($e);
    }

}
elseif($_POST["reset"]){
    header("Location:signup.php");
}

}

?>