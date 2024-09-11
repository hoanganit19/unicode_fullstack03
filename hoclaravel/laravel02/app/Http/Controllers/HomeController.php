<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function about()
    {
        return view('about');
    }
}

//Khi đăng nhập thành công ==> Nếu phone chưa được cập nhật ==> Chuyển sang trang cập nhật số điện thoại
//Khi cập nhật số điện thoại thành công ==> Sử dụng các chức năng như bình thường