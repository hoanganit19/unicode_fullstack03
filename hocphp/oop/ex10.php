<?php
interface MustVerifyEmail
{
    public function doRegister($name, $email, $password);
}

class DB
{
    protected $data = [];
    public function doRegister($name, $email, $password)
    {
        $status = 1;
        if ($this instanceof MustVerifyEmail) {
            $status = 0;
        }
        $user = [
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'status' => $status
        ];
        $this->data[] = $user;
    }
}

class User extends DB implements MustVerifyEmail
{
    public function register($name, $email, $password)
    {
        $this->doRegister($name, $email, $password);
    }
    public function getUsers()
    {
        return $this->data;
    }
}
$user = new User();
$user->register('john', 'j@j.com', '1234');
$user->register('john 2', 'a@j.com', '1234');
echo '<pre>';
print_r($user->getUsers());
echo '</pre>';
