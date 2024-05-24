<?php
class Database
{

}

$db = new Database();
$users = $db->fetchAll("SELECT * FROM users");
echo '<pre>';
print_r($users);
echo '</pre>';
