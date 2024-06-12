<?php
class User
{
    private $name = 'Hoàng An'; //Thuộc tính non-static
    // public $address;
    // private static $email = 'hoangan.web@gmail.com'; //Thuộc tính static
    // public static $age = 32;
    private static $instance = null;
    public function __construct()
    {
        if (!session_id()) {
            session_start();
        }

        $_SESSION['user'] = 'John';
        if (!self::$instance) {
            self::$instance = $this;
        }
    }
    public function setUser($user)
    {
        $_SESSION['user'] = $user;
    }
    public function getUser()
    {
        return $_SESSION['user'];
    }
    public static function getName2()
    {
        //Tạo object của class User
        // $obj = new self;
        if (!self::$instance) {
            return (new self)->name;
        }
        return self::$instance->name;
    }
    // public function getName()
    // {
    //     return $this->name;
    // }
    // public function getEmail()
    // {
    //     return self::$email;
    // }
    // public static function getAge()
    // {
    //     return self::$age;
    // }

}

// $user = new User;
// echo $user->getName() . '<br/>';
// echo $user->getEmail() . '<br/>';
// echo User::$age . '<br/>';
// echo $user::$age . '<br/>';
// echo User::getAge() . '<br/>';
// echo User::getName2() . '<br/>';

echo User::getName2() . '<br/>';

$user = new User;
$user->setUser('Hoàng An Unicode');
echo $user->getUser() . '<br/>';
echo User::getName2() . '<br/>';
echo $user->getUser() . '<br/>';
