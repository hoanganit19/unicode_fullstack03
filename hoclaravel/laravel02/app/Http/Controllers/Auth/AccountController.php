<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    public function phoneUpdate()
    {
        return view('auth.phone');
    }

    public function handlePhoneUpdate(Request $request)
    {
        $request->validate([
            'phone' => 'required|regex:/^0\d{9}$/'
        ]);
        $user = Auth::user();
        $user->phone = $request->phone;
        $user->save();
        return redirect('/');
    }
}
