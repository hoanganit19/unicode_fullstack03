<?php

use App\Http\Middleware\CheckDeviceMiddleware;
use App\Http\Middleware\RequiredPhoneNumberMiddleware;
use App\Http\Middleware\RoleMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // $middleware->append(RequiredPhoneNumberMiddleware::class);
        $middleware->alias([
            'required-phone-number' => RequiredPhoneNumberMiddleware::class,
            'check-device' => CheckDeviceMiddleware::class
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
