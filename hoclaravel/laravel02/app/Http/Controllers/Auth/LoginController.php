<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $status = Auth::attempt(['email' => $email, 'password' => $password], true);
        if ($status) {
            $user = Auth::user();
            $user->session_id = $request->session()->getId();
            $user->save();
            return redirect('/');
        }
        return back()->with('error', 'Invalid email or password');
    }

    public function logout()
    {
        $user = Auth::user();
        $user->session_id = null;
        $user->save();
        Auth::logout();
        return redirect()->route('login');
    }
}