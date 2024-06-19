<?php
require_once 'core/Route.php';
require_once 'pages/Home.php';
require_once 'pages/Posts.php';

use Core\Route;
use Pages\Home;
use Pages\Posts;

Route::get('/', [Home::class, 'index']);
Route::get('/tin-tuc', [Posts::class, 'index']);
Route::get('/chi-tiet-tin', [Posts::class, 'show']);


Route::resolve();
