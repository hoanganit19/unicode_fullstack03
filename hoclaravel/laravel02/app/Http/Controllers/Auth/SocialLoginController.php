<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{

    public function google()
    {
        return Socialite::driver('google')->redirect();
    }

    public function googleCallback()
    {
        $googleUser = Socialite::driver('google')->user();
        $name = $googleUser->name;
        $email = $googleUser->email;
        //Nếu email đã tồn tại ==> Lấy thông tin user cũ ra để xử lý đăng nhập
        //Nếu email không tồn tại ==> Insert thông tin user theo tài khoản google vào database và tự động đăng nhập
        $user = User::firstOrCreate(
            ['email' => $email],
            [
                'name' => $name,
                'email' => $email,
                'password' => bcrypt(uniqid()),
            ]
        );
        if ($user) {
            $sessionId = session()->getId();
            $user->session_id = $sessionId;
            $user->save();
            session()->put('current_session', $sessionId);
            Auth::login($user, true);
        }
        return redirect('/');
    }
}
