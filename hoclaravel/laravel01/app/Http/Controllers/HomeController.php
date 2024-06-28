<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $title = 'Unicode Academy';
        //Gọi model
        //Xử lý logic
        //Trả về view
        return view('home', compact('title'));
    }
}
