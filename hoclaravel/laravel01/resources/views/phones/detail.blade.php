@extends('layouts/main')
@section('content')
<h1>Chi tiết</h1>
<p>Tên: {{$phone->user->name}}</p>
<p>Email: {{$phone->user->email}}</p>
<p>Trạng thái: {{$phone->user->status ? 'Kích hoạt': 'Chưa kích hoạt'}}</p>
<p>Điện thoại: {{$phone->value}}</p>
@endsection