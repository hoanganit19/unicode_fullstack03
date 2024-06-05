<?php
class User extends Database
{
    public function __construct()
    {
        // echo 'user construct';
        parent::__construct(); //Gọi hàm __construct() của cha
    }
    public function all()
    {
        echo $this->table . '<br/>';
        return $this->fetchAll("SELECT * FROM users");
    }
}
