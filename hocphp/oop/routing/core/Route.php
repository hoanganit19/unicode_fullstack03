<?php

namespace Core;

class Route
{
    private static $routes = [];
    public static function get($path, $callback)
    {
        self::$routes[$path] = $callback;
    }
    public static function getPath()
    {
        return $_SERVER['PATH_INFO'] ?? '/';
    }
    public static function resolve()
    {
        $callback = self::$routes[self::getPath()] ?? null;
        if (!$callback) {
            echo '<h1>Page not found</h1>';
            return;
        }
        $instance = new $callback[0];
        $method = $callback[1];
        echo call_user_func_array([$instance, $method], []);
    }
}
