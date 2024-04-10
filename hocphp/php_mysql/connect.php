<?php
//Kết nối Database

//PHP => PDO => DRIVER => DATABASE

const _HOST = 'localhost';
const _USERNAME = 'root';
const _PASSWORD = '';
const _DATABASE = 'fullstack_03';
const _PORT = '3306';
const _DRIVER = 'mysql';

$dsn = _DRIVER . ":dbname=" . _DATABASE . ';host=' . _HOST . ';port=' . _PORT;
try {
    $conn = new PDO($dsn, _USERNAME, _PASSWORD);
} catch (PDOException $e) {
    echo $e->getMessage();
}
