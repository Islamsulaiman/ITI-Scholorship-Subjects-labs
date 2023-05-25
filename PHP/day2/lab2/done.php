<?php

$fname = $_REQUEST['firstName'];
$lname = $_REQUEST['lastName'];
$address = $_REQUEST['address'];
$country = $_REQUEST['country'];
$email = $_REQUEST['email'];
$skills = $_REQUEST['skills'];
$department = $_REQUEST['department'];

$query = "";
$missingData = false;
foreach ($_REQUEST as $key => $value) {
    if (!empty($value)) {
        if (is_array($value)) {
            foreach ($value as $insideValue)
                $query .= $insideValue . "=" . "active&";
            continue;
        }
        $query .= $key . "=" . $value . "&";
    } else if (empty($value)) {
        $missingData = true;
    }
}

function emailValidation() {
    global $email;
    if (!preg_match("/^[a-zA-Z-' ]*$/", $email)) {
        return true;
    }
    return false;
}
function passwordValidation() {
    global $password;
    if(strlen($password) < 8){
        return false;
    }
    return true;
}
function firstNameValidation() {
    global $fname;
    if(strlen($fname) < 3 ){
        return false;
    }
    return true;
}
function lastNameValidation() {
    global $lname;
    if(strlen($lname) < 3 ){
        return false;
    }
    return true;
}

?>

<html>
<head>
<link rel="stylesheet" href="style.css">
</head>

<body>

    <?php if ($missingData || !emailValidation() || !firstNameValidation() || !lastNameValidation()) { ?>
    <div class="back">
        <?php
            if ($missingData) echo "<p>Please fill all fields and try again</p>";
            if (!emailValidation()) {
                echo  "<p>You entered invalid E-mail</p>";
            }
            // if(!passwordValidation()) {
            //     echo  "<p>You entered  invalid password</p>";
            // }
            if(!firstNameValidation()){
                echo  "<p>You entered  invalid First Name</p>";
            } 
            if(!lastNameValidation()){
                echo  "<p>You entered  invalid Last Name</p>";
            } 
            
            ?>
           
        <a href='registeration.php?<?php echo $query; ?>'>Go Back</a>
    </div>
    <?php
        return;
    } ?>

    <?php

    $customersData = "$fname:$lname:$email:$address" .  PHP_EOL;

    $customerFile = fopen("customer.txt", "a+");
    fwrite($customerFile, $customersData);
    fclose($customerFile);

    header("Location: view.php");
    ?>



</body>

</html>