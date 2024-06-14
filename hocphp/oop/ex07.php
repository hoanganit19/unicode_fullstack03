<?php
//Trait: Hỗ trợ đa kế thừa trong PHP

trait Base
{

    private $name = 'Hoàng An';
    public function __construct()
    {
        echo 'Base Construct <br/>';
    }
    public function getName()
    {
        return $this->name;
    }
}

trait Auth
{
    private $email = 'hoangan.web@gmail.com';

    public function getEmail()
    {
        return $this->email;
    }
}

class User
{
    use Base {
        Base::__construct as private __baseConstruct;
    }
    use Auth;
    public function __construct()
    {
        echo 'User Construct <br/>';
        $this->__baseConstruct();
    }
    public function getProfile()
    {
        return ['name' => $this->name, 'email' => $this->email];
    }
}

// $user = new User;
// echo $user->getName() . '<br/>';
// echo $user->getEmail();
// $profile = $user->getProfile();
// echo '<pre>';
// print_r($profile);
// echo '</pre>';

//Bài tập
trait SoftDelete
{
    private function moveToTrash($productDetail)
    {
        if (!empty($productDetail)) {
            $this->trash[] = $productDetail;
        }
    }
    public function restore($id)
    {
    }
}

class Product
{
    use SoftDelete;
    private $products = [
        [
            'id' => 1,
            'name' => 'Product 1'
        ],
        [
            'id' => 2,
            'name' => 'Product 2'
        ],
        [
            'id' => 3,
            'name' => 'Product 3'
        ],
    ];
    private $trash = []; //Thùng rác
    public function getProducts()
    {
        return $this->products;
    }
    public function getProduct($id)
    {
        $key = array_search($id, array_column($this->products, 'id'));
        return $this->products[$key];
    }
    public function delete($id)
    {
        $productDetail = $this->getProduct($id);
        $this->products = array_values(array_filter($this->products, function ($product) use ($id) {
            return $id != $product['id'];
        }));
        if (method_exists($this, 'moveToTrash')) {
            call_user_func_array([$this, 'moveToTrash'], [$productDetail]);
        }
        return true;
    }
    public function getTrash()
    {
        return $this->trash;
    }
}

$product = new Product();
echo '<h3>Sản phẩm ban đầu</h3>';
echo '<pre>';
print_r($product->getProducts());
echo '</pre>';
$product->delete(2);
echo '<h3>Sản phẩm sau khi xóa</h3>';
echo '<pre>';
print_r($product->getProducts());
echo '</pre>';
echo '<h3>Thùng rác</h3>';
echo '<pre>';
print_r($product->getTrash());
echo '</pre>';
$product->restore(2);
