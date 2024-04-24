<?php
function setSession($key, $value)
{
    $_SESSION[$key] = $value;
    return true;
}

function getSession($key)
{
    return $_SESSION[$key] ?? null;
}

//Xóa session theo key
function deleteSession($key)
{
    unset($_SESSION[$key]);
    return true;
}

//Xóa hết session
function destroySession()
{
    session_destroy();
    return true;
}

//Session dùng 1 lần
function getFlash($key)
{
    $data = getSession($key);
    deleteSession($key);
    return $data;
}
