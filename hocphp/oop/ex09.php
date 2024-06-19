<?php
//Interface: Template quy ước các phương thức được sử dụng trong 1 class ==> Yêu cầu các class cần phải tuân thủ (Bản hợp đồng)
//Ví dụ: Xây dựng class xác thực người dùng
interface ValidateInterface
{
    public function getMessage();
}
interface AuthInterface
{
    public function check();
    public function login($email, $password);
    public function register($name, $email, $password);
    public function user();
    public function logout();
}

interface DatabaseInterface
{
    public function fetchAll();
}

interface UserInterface extends DatabaseInterface, ValidateInterface
{
    public function getAllUsers();
}

class Auth implements AuthInterface, UserInterface
{
    public function check()
    {
    }
    public function login($email, $password)
    {
    }
    public function register($name, $email, $password)
    {
    }
    public function user()
    {
    }
    public function logout()
    {
    }
    public function getAllUsers()
    {
    }
    public function fetchAll()
    {
    }
    public function getMessage()
    {
    }
}

$auth = new Auth();
var_dump($auth);
