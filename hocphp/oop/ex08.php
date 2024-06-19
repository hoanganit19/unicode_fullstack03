<?php
//Lớp trừu tượng
/*
- Chưa rõ ràng sẽ làm gì với lớp đó
- Trong lớp trừu tượng sẽ có các phương thức trừu tượng hoặc không
- Phương thức trừu tượng chỉ tồn tại trong lớp trường tượng
- Trong lớp trường tượng, phương thức trừu tượng chỉ được khai báo
- Không thể khởi tạo đối tượng từ lớp trừu tượng
- Muốn sử dụng lớp trừu tượng ==> Thông qua 1 lớp kế thừa và phải định nghĩa phương thức trừu tượng trong lớp kế thừa
*/
// abstract class Person
// {
//     protected $name = 'Hoàng An';
//     protected $email = 'hoangan.web@gmail.com';

//     abstract public function getEmail();
//     public function getName()
//     {
//         return $this->name;
//     }
// }

// class Boy extends Person
// {
//     public function getEmail()
//     {
//         return $this->email;
//     }
// }

// $obj = new Boy();
// var_dump($obj->getEmail());
