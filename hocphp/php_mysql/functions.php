<?php
function fetch($sql, $data = [])
{
    global $conn;
    $statement = $conn->prepare($sql);
    $statement->execute($data);
    return $statement->fetch(PDO::FETCH_OBJ);
}

function fetchAll($sql, $data = [])
{
    global $conn;
    $statement = $conn->prepare($sql);
    $statement->execute($data);
    return $statement->fetchAll(PDO::FETCH_OBJ);
}

function create($table, $data)
{
    global $conn;
    $keys = array_keys($data);
    $attributes = implode(', ', $keys);
    // echo $attributes . '<br/>';
    $values = ':' . implode(', :', $keys);
    // echo $values . '<br/>';
    $sql = "INSERT INTO {$table}({$attributes}) VALUES({$values})";
    $statement = $conn->prepare($sql);
    return $statement->execute($data);
}

function update($table, $updateData = [], $condition = null, $conditionData = [])
{
    global $conn;
    $keys = array_keys($updateData);
    $updateStr = "";
    foreach ($keys as $key) {
        $updateStr .= $key . "=:" . $key . ", ";
    }
    $updateStr = rtrim($updateStr, ', ');
    $sql = "UPDATE {$table} SET {$updateStr}";
    if ($condition) {
        $sql .= " WHERE {$condition}";
    }

    $statement = $conn->prepare($sql);
    $data = array_merge($updateData, $conditionData);
    return $statement->execute($data);
    //UPDATE users SET password=:password, status=:status WHERE id = :id
}

function delete($table, $condition = null, $conditionData = [])
{
    global $conn;
    $sql = "DELETE FROM {$table}";
    if ($condition) {
        $sql .= " WHERE {$condition}";
    }
    $statement = $conn->prepare($sql);
    return $statement->execute($conditionData);

}
