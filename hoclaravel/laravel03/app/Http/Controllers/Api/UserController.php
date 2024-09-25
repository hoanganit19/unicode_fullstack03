<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function index(Request $request)
    {
        try {
            $sort = $request->query('_sort', 'id');
            $order = $request->query('_order', 'asc');
            $q = $request->query('_q');
            $page = $request->query('_page', 1);
            $limit = $request->query('_limit', 10);
            $offset = ($page - 1) * $limit;
            $users = User::orderBy($sort, $order);

            if ($q) {
                $users->where(function ($query) use ($q) {
                    $query->where('name', 'like', '%' . $q . '%');
                    $query->orWhere('email', 'like', '%' . $q . '%');
                });
            }
            $total = $users->count();
            return response()->json([
                'success' => true,
                'data' => $users->limit($limit)->offset($offset)->get(),
                'current_page' => (int) $page,
                'total' => $total,
                'total_page' => ceil($total / $limit),
                'message' => 'Get all users success',
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'errors' => $e->getMessage(),
                'message' => 'Get all users failed',
            ]);
        }
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => "required|min:4",
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ], [
            'required' => ':attribute bắt buộc phải nhập',
            'email' => ':attribute phải là email',
            'min' => ':attribute phải từ :min ký tự',
            'unique' => ':attribute đã tồn tại',
        ], [
            'name' => 'Tên',
            'email' => 'Email',
            'password' => 'Mật khẩu',
        ]);

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            'success' => true,
            'data' => $user,
            'message' => 'Create user success',
        ], 201);
    }

    public function show($id)
    {
        try {
            $user = User::find($id);
            if (!$user) {
                throw new Exception('User not found', 404);
            }
            return response()->json([
                'success' => true,
                'data' => $user,
                'message' => 'Get user success',
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'errors' => $e->getMessage(),
                'message' => 'Get user failed',
            ], $e->getCode());
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $user = User::find($id);
            if (!$user) {
                throw new Error('User not found', 404);
            }
            $rules = [];
            if ($request->name) {
                $rules['name'] = "min:4";
                $user->name = $request->name;
            }
            if ($request->email) {
                $rules['email'] = 'email|unique:users,email,' . $id;
                $user->email = $request->email;
            }
            if ($request->password) {
                $rules['password'] = 'min:6';
                $user->password = bcrypt($request->password);
            }
            $request->validate($rules);
            $user->save();

            return response()->json([
                'success' => true,
                'data' => $user,
                'message' => 'Update user success',
            ]);

        } catch (Error $e) {
            return response()->json([
                'success' => false,
                'errors' => $e->getMessage(),
                'message' => 'Update user failed',
            ], $e->getCode() ?? 500);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'errors' => $e->errors(),
                'message' => 'Update user failed',
            ], 422);
        }
    }

    public function delete($id)
    {
        try {
            $user = User::find($id);
            if (!$user) {
                throw new Exception('User not found', 404);
            }
            $user->delete();
            return response()->json([
                'success' => true,
                'message' => 'Delete user success',
                'data' => $user,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'errors' => $e->getMessage(),
                'message' => 'Delete user failed',
            ], $e->getCode() ?? 500);
        }
    }
}
