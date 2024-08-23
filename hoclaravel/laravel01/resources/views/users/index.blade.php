@extends('layouts/main')
@section('content')
<h1>Danh sách người dùng</h1>
@if (session('msg'))
<div class="alert alert-success">{{session('msg')}}</div>
@endif
<a href="/users/create" class="btn btn-primary mb-2">Thêm mới</a>
@include('users.partials.filter-form')
<div class="input-group mb-3">
    <a href="{{getOrderByUrl('latest')}}" class="btn btn-primary {{request('order-by') === 'latest' || !request('order-by') ? 'active' : ''}}">Mới nhất</a>
    <a href="{{getOrderByUrl('oldest')}}" class="btn btn-primary {{request('order-by') === 'oldest' ? 'active' : ''}}">Cũ nhất</a>
</div>
<table class="table table-bordered">
    <thead>
        <tr>
            <th width="5%">
                <input type="checkbox">
            </th>
            <th width="5%">STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th width="10%">Trảng thái</th>
            <th width="10%">Khóa học</th>
            <th width="5%">Xem</th>
            <th width="5%">Sửa</th>
            <th width="5%">Xóa</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($users as $key => $user)
        <tr>
            <td>
                <input type="checkbox" class="checkbox-delete" value="{{$user->id}}" />
            </td>
            <td>{{$key + 1}}</td>
            <td>{{$user->name}}</td>
            <td>{{$user->email}}</td>
            <td>{{$user?->phone?->value}}</td>
            <td>
                <span class="badge bg-{{$user->status ? 'success': 'warning'}}">
                    {{$user->status ? 'Kích hoạt' : 'Chưa kích hoạt'}}
                </span>
            </td>
            <td>
                <a href="/users/{{$user->id}}/courses" class="btn btn-primary">Thay đổi</a>
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
<div class="d-flex justify-content-between align-items-center">
    <form action="/users/deletes" method="post" onsubmit="return confirm('Bạn chắc không?')">
        <input type="hidden" name="ids" class="id-delete" />
        <button class="btn btn-danger">Xóa đã chọn</button>
        @csrf
    </form>
    {{ $users->links('vendor.pagination.user-paginate') }}
</div>
@endsection
<form action="" method="post" class="delete-form">
    @csrf
</form>