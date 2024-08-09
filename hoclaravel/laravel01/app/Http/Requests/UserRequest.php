<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $user = $this->route('user');

        $rules = [
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|regex:/^0\d{9}$/'
        ];
        if ($user) {
            $rules['email'] = 'required|email|unique:users,email,' . $user->id;
        }
        if ($this->password) {
            $rules['password'] = 'required|min:6|same:confirm_password';
            $rules['confirm_password'] = 'required|min:6';
        }
        return $rules;
    }

    public function messages()
    {
        return [
            'required' => ':attribute bắt buộc phải nhập',
            'min' => ':attribute phải từ :min ký tự',
            'email' => ':attribute không đúng định dạng email',
            'unique' => ':attribute đã tồn tại trên hệ thống',
            'same' => ':attribute không khớp với mật khẩu',
            'regex' => ':attribute phải định dạng sẽ 0xxxxxxx',
        ];
    }

    public function attributes()
    {
        return [
            'name' => "Tên",
            'email' => 'Địa chỉ email',
            'password' => 'Mật khẩu',
            'confirm_password' => 'Nhập lại mật khẩu',
            'phone' => 'Điện thoại'
        ];
    }
}
