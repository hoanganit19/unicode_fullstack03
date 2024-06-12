<?php
class Example
{
    public function method1()
    {
        echo 'method 1 <br/>';
        return $this;
    }
    public function method2()
    {
        echo 'method 2 <br/>';
        return $this;
    }
    public function method3()
    {
        echo 'method 3 <br/>';
    }
}

$example = new Example();
// $example->method1();
// $example->method2();
// $example->method3();
// $example->method1()->method2()->method3();

class Query
{
    private $query = [];
    public function select(...$args)
    {
        $this->query['select'] = $args;
        return $this;
    }

    public function table($table = '')
    {
        $this->query['table'] = $table;
        return $this;
    }

    public function where($field, $compare, $value)
    {
        $this->query['where'] = "{$field} {$compare} {$value}";
        return $this;
    }

    public function orderBy($field, $sort = 'ASC')
    {
        $this->query['orderBy'] = "{$field} {$sort}";
        return $this;
    }

    public function limit($number)
    {
        $this->query['limit'] = $number;
        return $this;
    }

    public function offset($number)
    {
        $this->query['offset'] = $number;
        return $this;
    }

    public function get()
    {
        $select = implode(', ', $this->query['select']);
        $table = $this->query['table'];
        $where = $this->query['where'];
        $orderBy = $this->query['orderBy'];
        $limit = $this->query['limit'];
        $offset = $this->query['offset'];
        $sql = "SELECT $select FROM $table WHERE $where ORDER BY $orderBy LIMIT $limit OFFSET $offset";
        return $sql;
    }
}
$query = new Query();
$sql = $query->select('id', 'name', 'email')->where('id', '=', 1)->orderBy('name', 'ASC')->limit(10)->offset(2)->table('users')->get();
echo $sql;
// ==> Output: SELECT id, name, email FROM users WHERE id=1 ORDER BY name ASC LIMIT 10 OFFSET 2

//Kế thừa: Chỉ kế thừa được 1 class
/*
A extends B extends C extends D
*/