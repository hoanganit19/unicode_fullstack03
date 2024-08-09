<?php

namespace App\Http\Controllers;

use App\Models\Phone;
use Illuminate\Http\Request;

class PhoneController extends Controller
{
    public function index()
    {
        $phones = Phone::all();
        return view('phones.index', compact('phones'));
    }

    public function view(Phone $phone)
    {
        return view('phones.detail', compact('phone'));
    }
}
