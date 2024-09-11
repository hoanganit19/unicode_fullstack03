<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function index()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);
        $user = new User();
        $user->fill($request->all());
        $user->password = bcrypt($request->password);
        $user->session_id = $request->session()->getId();
        $user->save();
        Auth::login($user, true); //Tự động đăng nhập theo user
        // return redirect('/auth/login')->with('msg', 'Register success');
        return redirect('/');
    }
}
