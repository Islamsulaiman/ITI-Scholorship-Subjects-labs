<?php
session_start();
if(!isset($_SESSION["name"])){
header("Location:login.php");
}

$users = file('users.txt');
$user_info = [];

foreach ($users as $user) {
    $info = explode(':', $user);
    if ($info[1] == $_SESSION["name"]) {
        $user_info = $info;
        break;
    }
}

$image_url = $user_info[5];
?>

<html>
<head>
	<title>Welcome</title>
	<style>
		body {
			background-color: #f1f1f1;
			font-family: Arial, sans-serif;
		}
		.container {
			margin: 0 auto;
			max-width: 800px;
			padding: 20px;
			background-color: #fff;
			box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
			border-radius: 10px;
			text-align: center;
		}
	
		.btn {
			background-color: #fff;
			color: #333;
			padding: 10px 20px;
			border: none;
			border-radius: 45px;
			box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
			transition: all 0.3s ease 0s;
			cursor: pointer;
			margin: 10px;
			font-size: 16px;
			text-transform: uppercase;
			letter-spacing: 1px;
			outline: none;
		}
		.btn:hover {
			transform: translateY(-7px);
		}
		p {
			font-style: oblique;
			color: #333;
			margin-bottom: 10px;
		}
		a {
			text-decoration: none;
			color: #333;
		}

        img{
            width: 20%
        }
	</style>
</head>
<body>
	<div class="container">
		<h2>Welcome <?php echo $_SESSION["name"];?></h2>
        <img src="<?php echo $image_url; ?>">
		<p>If you want to logout</p>
		<button class="btn"><a href="logout.php">Logout</a></button>
	</div>
</body>
</html>