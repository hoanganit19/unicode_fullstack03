<?php
class Person
{
    //Thuộc tính
    // phạm_vi tenthuoctinh
    private $name;
    private $email;

    //Phương thức khởi tạo
    public function __construct($name, $email)
    {
        echo 'Phương thức khởi tạo <br/>';
        // echo $name . '<br/>';
        // echo $email . '<br/>';
        // var_dump($this);
        $this->name = $name;
        $this->email = $email;
    }

    //Phương thức
    //phạm_vi tenphuongthuc
    public function getInfo()
    {
        return [
            'name' => $this->name,
            'email' => $this->email,
        ];
    }

    public function getEmail()
    {
        return $this->email;
    }

    //Phương thức hủy
    public function __destruct()
    {
        echo 'Phương thức hủy';
    }
}

//Tạo đối tượng
$person1 = new Person('Hoàng An', 'hoangan.web@gmail.com');
// echo $person1->name . '<br/>';
// echo $person1->email . '<br/>';
echo '<pre>';
print_r($person1->getInfo());
echo '</pre>';
echo $person1->getEmail() . '<br/>';

// $person2 = new Person('Nguyễn Văn A', 'nguyenvana@gmail.com');
// $person2->name = 'Nguyễn Văn B';
// echo '<pre>';
// print_r($person2->getInfo());
// echo '</pre>';
