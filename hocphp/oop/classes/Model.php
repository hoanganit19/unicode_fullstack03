<?php
class Model extends Database
{
    protected $table = null;
    public function get()
    {
        $sql = 'SELECT * FROM ' . $this->table;
        $result = $this->fetchAll($sql);
        return $result;
    }

    public function first($id)
    {
        $sql = 'SELECT * FROM ' . $this->table . ' WHERE id = :id';
        $data = ['id' => $id];
        $result = $this->fetch($sql, $data);
        return $result;
    }

    public function create($table, $data = [])
    {
        return parent::create($table, $data);
    }
}
