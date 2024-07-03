@extends('layouts/main')
@section('content')
<h1>Thêm người dùng</h1>
<form action="" method="post">
    <div class="mb-3">
        <label for="">Tên</label>
        <input type="text" name="name" class="form-control" placeholder="Tên..." />
    </div>
    <div class="mb-3">
        <label for="">Email</label>
        <input type="text" name="email" class="form-control" placeholder="Email..." />
    </div>
    <div class="mb-3">
        <label for="">Mật khẩu</label>
        <input type="password" name="password" class="form-control" placeholder="Mật khẩu..." />
    </div>
    <button class="btn btn-primary">Lưu</button>
    @csrf
</form>
@endsection