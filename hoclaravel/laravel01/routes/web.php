<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);

//Request ==> public/index.php ==> bootstrap ==> Provider ==> Middleware ==> Route ==> Middleware ==> Controller ==> Action ==> View