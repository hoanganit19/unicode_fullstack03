@extends('layouts/main')
@section('content')
<h1>Danh sách người dùng</h1>
@if (session('msg'))
<div class="alert alert-success">{{session('msg')}}</div>
@endif
@include('users.partials.filter-form')
<div class="input-group mb-3">
    <a href="{{getOrderByUrl('latest')}}" class="btn btn-primary {{request('order-by') === 'latest' || !request('order-by') ? 'active' : ''}}">Mới nhất</a>
    <a href="{{getOrderByUrl('oldest')}}" class="btn btn-primary {{request('order-by') === 'oldest' ? 'active' : ''}}">Cũ nhất</a>
</div>
<table class="table table-bordered">
    <thead>
        <tr>
            <th width="5%">STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th width="10%">Trảng thái</th>
            <th width="5%">Xem</th>
            <th width="5%">Sửa</th>
            <th width="5%">Xóa</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($users as $key => $user)
        <tr>
            <td>{{$key + 1}}</td>
            <td>{{$user->name}}</td>
            <td>{{$user->email}}</td>
            <td>
                <span class="badge bg-{{$user->status ? 'success': 'warning'}}">
                    {{$user->status ? 'Kích hoạt' : 'Chưa kích hoạt'}}
                </span>
            </td>
            <td><a href="/users/{{$user->id}}/view" class="btn btn-primary">Xem</a></td>
            <td>
                <a href="/users/{{$user->id}}/edit" class="btn btn-warning">Sửa</a>
            </td>
            <td>
                <a onclick="
                event.preventDefault(); 
                if (confirm('Bạn có chắc chắn?')) {
                document.querySelector('.delete-form').action=event.target.href;
                document.querySelector('.delete-form').submit();
                }
                " href="/users/{{$user->id}}/delete" class="btn btn-danger">Xóa</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
<form action="" method="post" class="delete-form">
    @csrf
</form>