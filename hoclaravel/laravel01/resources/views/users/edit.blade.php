@extends('layouts/main')
@section('content')
<h1>Cập nhật người dùng</h1>
@if (session('msg'))
<div class="alert alert-success">{{session('msg')}}</div>
@endif
<form action="" method="post">
    <div class="mb-3">
        <label for="">Tên</label>
        <input type="text" name="name" class="form-control" placeholder="Tên..." value="{{$user->name}}" />
        @error('name')
        <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="mb-3">
        <label for="">Email</label>
        <input type="text" name="email" class="form-control" placeholder="Email..." value="{{$user->email}}" />
        @error('email')
        <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="mb-3">
        <label for="">Mật khẩu</label>
        <input type="password" name="password" class="form-control" placeholder="Mật khẩu..." />
        @error('password')
        <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="mb-3">
        <label for="">Nhập lại mật khẩu</label>
        <input type="password" name="confirm_password" class="form-control" placeholder="Nhập lại mật khẩu..." />
        @error('confirm_password')
        <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <button class="btn btn-primary">Lưu</button>
    @csrf
</form>
@endsection