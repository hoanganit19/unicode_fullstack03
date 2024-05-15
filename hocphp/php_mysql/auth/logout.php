<?php
session_start();
require_once '../includes/functions.php';
require_once '../includes/session.php';
deleteSession('user');
redirect('/php_mysql/auth/login.php');
