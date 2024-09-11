<?php

use App\Http\Controllers\Auth\AccountController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\SocialLoginController;
use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\RoleMiddleware;

Route::group(['middleware' => ['auth', 'check-device', 'required-phone-number']], function () {
    Route::get('/', [HomeController::class, 'index']);
    Route::get('/about', [HomeController::class, 'about']);
});
Route::get('/auth/login', [LoginController::class, 'index'])->name('login');
Route::post('/auth/login', [LoginController::class, 'login']);
Route::get('/auth/logout', [LoginController::class, 'logout']);

Route::get('/auth/register', [RegisterController::class, 'index']);
Route::post('/auth/register', [RegisterController::class, 'register']);

Route::get('/phone-update', [AccountController::class, 'phoneUpdate'])->name('auth.phone');
Route::post('/phone-update', [AccountController::class, 'handlePhoneUpdate']);

Route::get('/auth/google', [SocialLoginController::class, 'google'])->name('auth.google');
Route::get('/auth/google/callback', [SocialLoginController::class, 'googleCallback']);
