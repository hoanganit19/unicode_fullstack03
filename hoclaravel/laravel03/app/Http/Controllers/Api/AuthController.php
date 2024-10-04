<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $status = Auth::attempt(['email' => $request->email, 'password' => $request->password]);
        if (!$status) {
            return response()->json([
                'success' => false,
                'errors' => 'Unauthorized',
                'message' => 'Email or password is incorrect'
            ], 401);
        }
        $user = Auth::user();
        $token = $user->createToken('auth-api');
        return response()->json([
            'status' => true,
            'data' => [
                'token' => $token->plainTextToken
            ],
            'message' => 'Login successfully'
        ]);
    }

    public function profile()
    {
        $user = Auth::user();
        return response()->json([
            'success' => true,
            'data' => $user,
            'message' => 'Get profile successfully'
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'success' => true,
            'message' => 'Logout successfully'
        ]);
    }

    public function register(Request $request)
    {
        //Validate
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);
        //Tạo user
        $user = new User();
        $user->fill($request->all());
        $user->save();
        //Tự động đăng nhập
        Auth::login($user);
        $token = $user->createToken('auth-api');
        return response()->json([
            'status' => true,
            'data' => [
                'token' => $token->plainTextToken,
                'user' => $user
            ],
            'message' => 'Register successfully'
        ], 201);
    }
}
