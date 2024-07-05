<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        //Xử lý lọc dữ liệu ở đây
        $query = User::orderBy('id', $request->query('order-by') == 'oldest' ? 'asc' : 'desc');

        //Kiểm tra xem có status trên URL không?
        // ==> Đưa query với field status
        if ($request->status) {
            $query->where('status', $request->status === 'active' ? 1 : 0);
        }

        //Kiểm tra xem có keyword không?
        // ==> Đưa query với field name
        if ($request->keyword) {
            $query->where(function ($subQuery) use ($request) {
                $subQuery
                    ->where('name', 'like', '%' . $request->keyword . '%')
                    ->orWhere('email', 'like', '%' . $request->keyword . '%');
            });
        }
        // dd($query->ddRawSql());

        $users = $query->get(); //Trả về tất cả

        return view('users.index', compact('users'));
    }
    public function show(User $user)
    {
        // $user = User::findOrFail($id); //Tìm theo primary key
        return view('users.detail', compact('user'));
    }

    public function create(User $user)
    {

        return view('users.create');
    }

    public function store(Request $request, User $user)
    {
        //1. Request

        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        //2. Logic
        $user->name = $name;
        $user->email = $email;
        $user->password = Hash::make($password);
        $user->save();
        //3. Response
        $request->session()->flash('msg', 'Đã thêm người dùng');
        return redirect('/users');
        // return back();
    }

    public function edit(User $user)
    {
        return view('users.edit', compact('user'));
    }

    public function update(Request $request, User $user)
    {
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $user->name = $name;
        $user->email = $email;
        if ($password) {
            $user->password = Hash::make($password);
        }
        $user->save();
        return redirect('/users/' . $user->id . '/edit')->with('msg', 'Cập nhật thành công');
    }
    public function delete(User $user)
    {
        $user->delete();
        return redirect('/users')->with('msg', 'Xóa thành công');
    }
}

//TenClass $tenobject ==> Dependency Injection (DI)
//$user = new User;