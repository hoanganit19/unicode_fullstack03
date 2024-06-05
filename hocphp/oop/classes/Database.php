<?php
class Database
{
    private $host = 'localhost';
    private $username = 'root';
    private $password = '';
    private $database = 'fullstack_03';
    private $port = '3307';
    private $driver = 'mysql';
    private $conn = null;
    protected $table = 'users';
    public function __construct()
    {
        //Kết nối
        try {
            $dsn = $this->driver . ":dbname=" . $this->database . ';host=' . $this->host . ';port=' . $this->port;
            if (!$this->conn) {
                $this->conn = new PDO($dsn, $this->username, $this->password);
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function __destruct()
    {
        $this->conn = null; //Hủy kết nối Database
    }

    public function fetchAll($sql, $data = [])
    {
        $statement = $this->query($sql, $data);
        if (!$statement) {
            return false;
        }
        return $statement->fetchAll(PDO::FETCH_OBJ);
    }

    public function fetch($sql, $data = [])
    {
        $statement = $this->query($sql, $data);
        if (!$statement) {
            return false;
        }
        return $statement->fetch(PDO::FETCH_OBJ);
    }

    public function create($table, $data)
    {
        $sql = $this->buildQueryInsert($table, $data);
        $statement = $this->query($sql, $data);
        if (!$statement) {
            return false;
        }
        return true;
    }

    public function update($table, $dataUpdate = [], $condition = null, $dataCondition = [])
    {
        $sql = $this->buildQueryUpdate($table, $dataUpdate, $condition);
        $data = array_merge($dataUpdate, $dataCondition);
        $statement = $this->query($sql, $data);
        if (!$statement) {
            return false;
        }
        return true;
    }

    public function delete($table, $condition = null, $dataCondition = [])
    {
        $sql = $this->buildQueryDelete($table, $condition);
        $statement = $this->query($sql, $dataCondition);
        if (!$statement) {
            return false;
        }
        return true;
    }

    public function lastId()
    {
        return $this->conn->lastInsertId();
    }

    public function count($sql, $data = [])
    {
        $statement = $this->query($sql, $data);
        return $statement->rowCount();
    }

    private function buildQueryDelete($table, $condition = null)
    {
        $sql = "DELETE FROM {$table}";
        if ($condition) {
            $sql .= " WHERE {$condition}";
        }
        return $sql;
    }

    private function buildQueryUpdate($table, $dataUpdate = [], $condition = null)
    {
        $keys = array_keys($dataUpdate);
        $updateStr = "";
        foreach ($keys as $key) {
            $updateStr .= $key . "=:" . $key . ", ";
        }
        $updateStr = rtrim($updateStr, ', ');
        $sql = "UPDATE {$table} SET {$updateStr}";
        if ($condition) {
            $sql .= " WHERE {$condition}";
        }
        return $sql;
    }

    private function buildQueryInsert($table, $data)
    {
        $keys = array_keys($data);
        $attributes = implode(', ', $keys);
        $values = ':' . implode(', :', $keys);
        $sql = "INSERT INTO {$table}({$attributes}) VALUES({$values})";
        return $sql;
    }

    private function query($sql, $data = [])
    {
        try {
            $statement = $this->conn->prepare($sql);
            $statement->execute($data);
            return $statement;
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}
