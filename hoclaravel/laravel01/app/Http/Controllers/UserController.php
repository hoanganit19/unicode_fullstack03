<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Phone;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
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

        $users = $query->paginate(config('paginate.limit'))->withQueryString(); //Trả về tất cả

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

    public function store(UserRequest $request, User $user)
    {
        //Validate ==> Nếu lỗi, tự động back về request trước

        //1. Request
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        //2. Logic
        $user->name = $name;
        $user->email = $email;
        $user->password = Hash::make($password);
        $user->save();

        $phone = new Phone(['value' => $request->phone]);
        $user->phone()->save($phone);
        //3. Response
        $request->session()->flash('msg', 'Đã thêm người dùng');
        return redirect('/users');
        // return back();
    }

    public function edit(User $user)
    {
        return view('users.edit', compact('user'));
    }

    public function update(UserRequest $request, User $user)
    {
        //Xử lý
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $user->name = $name;
        $user->email = $email;
        if ($password) {
            $user->password = Hash::make($password);
        }
        $user->save();
        $phone = $user->phone;
        if (!$phone) {
            $phone = new Phone();
        }
        $phone->value = $request->phone;
        $user->phone()->save($phone);
        return redirect('/users/' . $user->id . '/edit')->with('msg', 'Cập nhật thành công');
    }
    public function delete(User $user)
    {
        $user->phone->delete();
        $user->delete();
        return redirect('/users')->with('msg', 'Xóa thành công');
    }

    public function deletes(Request $request)
    {
        //Tìm hiểu: whereIn()
        if (!$request->ids) {
            return redirect('/users')->with('msg', 'Chọn người dùng để xóa');
        }
        $ids = explode(',', $request->ids);
        User::whereIn('id', $ids)->delete();

        return redirect('/users')->with('msg', 'Đã xóa ' . count($ids) . ' người dùng');
    }
}

//TenClass $tenobject ==> Dependency Injection (DI)
//$user = new User;

//Tạo trang chi tiết post thể hiện các thông tin sau
// - Tiêu đề
// - Nội dung
// - Tên người dùng