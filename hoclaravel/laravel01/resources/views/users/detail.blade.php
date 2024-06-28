@extends('layouts/main')
@section('content')
<h1>Chi tiết người dùng</h1>
<p>Tên: {{$user->name}}</p>
<p>Email: {{$user->email}}</p>
<p>Thời gian tạo: {{$user->created_at}}</p>
<p>Thời gian cập nhật: {{$user->updated_at}}</p>
@endsection