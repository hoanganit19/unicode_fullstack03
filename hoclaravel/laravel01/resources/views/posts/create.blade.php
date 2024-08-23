@extends('layouts/main')
@section('content')
<h1>Thêm bài viết</h1>
<form action="" method="POST">
    <div class="mb-3">
        <label for="">Tiêu đề</label>
        <input type="text" name="title" class="form-control" placeholder="Tiêu đề..." required>
    </div>
    <div class="mb-3">
        <label for="">Nội dung</label>
        <textarea name="content" class="form-control" placeholder="Nội dung..." required></textarea>
    </div>
    <div class="mb-3">
        <label for="">Người đăng</label>
        <select name="user_id" class="form-select">
            @foreach ($users as $user)
            <option value="{{$user->id}}">{{$user->name}}</option>
            @endforeach
        </select>
    </div>
    <button class="btn btn-primary">Thêm mới</button>
    @csrf
</form>
@endsection