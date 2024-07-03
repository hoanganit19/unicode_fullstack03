<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{user}/view', [UserController::class, 'show']);
Route::get('/users/create', [UserController::class, 'create']);
Route::post('/users/create', [UserController::class, 'store']);
Route::get('/users/{user}/edit', [UserController::class, 'edit']);
Route::post('/users/{user}/edit', [UserController::class, 'update']);
Route::post('/users/{user}/delete', [UserController::class, 'delete']);

//Request ==> public/index.php ==> bootstrap ==> Provider ==> Middleware ==> Route ==> Middleware ==> Controller ==> Action ==> View