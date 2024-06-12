<?php
class User
{
    private function getName()
    {
        return 'Hoàng An';
    }
    private static function getEmail()
    {
        return 'hoangan.web@gmail.com';
    }
    public function __call($name, $arguments = [])
    {
        return call_user_func_array([$this, $name], $arguments);
    }
    public static function __callStatic($name, $arguments)
    {
        $class = __CLASS__; //Trả về class hiện tại
        return call_user_func_array([$class, $name], $arguments);
    }
}

// $user = new User();
// echo $user->getName();
// echo User::getEmail();

//Xây dựng builder giống Laravel
class BaseDB
{

    private function table($name)
    {
        echo 'Table: ' . $name . '<br/>';
        return $this;
    }
    private function where($field, $compare, $value)
    {
        echo 'Where: ' . $field . ' ' . $compare . ' ' . $value . '<br/>';
        return $this;
    }
    private function orderBy($field, $order)
    {
        echo 'Order: ' . $field . ' ' . $order . '<br/>';
        return $this;
    }
    private function get()
    {
        echo 'Execute';
    }
    protected function executeMethod($context, $name, $arguments = [])
    {
        if (str_starts_with($name, 'where')) {
            $fieldName = str_replace('where', '', $name);
            $fieldName = strtolower(preg_replace("/([A-Z])/", "_$1", $fieldName));
            $fieldName = ltrim($fieldName, '_');
            $name = 'where';
            $arguments = [$fieldName, '=', $arguments[0]];
        }

        if (!method_exists($context, $name)) {
            throw new Exception('Method ' . $name . ' does not exist');
        }
        return call_user_func_array([$context, $name], $arguments);
    }
}
class DB extends BaseDB
{
    private static $instance = null;
    public function __construct()
    {
        self::$instance = $this;
    }
    public function __call($name, $arguments)
    {
        return $this->executeMethod(self::$instance, $name, $arguments);
    }
    public static function __callStatic($name, $arguments)
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance->executeMethod(self::$instance, $name, $arguments);
    }
}

// $db = new DB();
// $db->table('users')->where('name', '=', 'Hoàng An')->get();
// DB::table('users')->where('name', '=', 'Hoàng An')->get();
// DB::where('name', '=', 'Hoàng An')->table('users')->get();
// DB::orderBy('name', 'asc')->table('users')->where('name', '=', 'Hoàng An')->get();
DB::table('users')->whereRequestAnimationFrame('Hà Nội')->get();

//__call(), __callStatic() --> Magic Method
//whereId(1) --> where('id', '=', 1)
//whereUserAddress('Hà Nội') ==> where('user_address', '=', 'Hà Nội')