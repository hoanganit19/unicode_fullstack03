@extends('layouts/main')
@section('content')
<h1>Danh sách bài viết</h1>
<a href="{{route('posts.create')}}" class="btn btn-primary mb-3">Thêm mới</a>
@foreach ($posts as $post)
<div class="mb-3">
    <h3><a href="{{route('posts.view', $post)}}">{{$post->title}}</a></h3>
    <p>Người đăng: {{$post->user?->name ?? 'Không xác định'}}</p>
</div>
@endforeach
@endsection