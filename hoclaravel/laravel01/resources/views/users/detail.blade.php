@extends('layouts/main')
@section('content')
<h1>Chi tiết người dùng</h1>
<p>Tên: {{$user->name}}</p>
<p>Email: {{$user->email}}</p>
<p>Thời gian tạo: {{$user->created_at}}</p>
<p>Thời gian cập nhật: {{$user->updated_at}}</p>
<h3>Danh sách bài viết</h3>
@foreach ($user->posts as $post)
    <p><a href="{{route('posts.view', $post)}}">{{$post->title}}</a></p>
@endforeach
<h3>Danh sách khóa học</h3>
@foreach ($user->courses as $course)
<p>{{$course->name}}</p>
@endforeach
@endsection
