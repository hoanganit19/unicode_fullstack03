<?php
require_once '../includes/phpmailer/Exception.php';
require_once '../includes/phpmailer/PHPMailer.php';
require_once '../includes/phpmailer/SMTP.php';
require_once '../includes/functions.php';

sendMail('hoangan.web@gmail.com', 'Demo gửi email', 'Tài khoản đã bị hack');
