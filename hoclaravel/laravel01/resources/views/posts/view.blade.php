@extends('layouts/main')
@section('content')
<h1>{{$post->title}}</h1>
<p>{{$post->content}}</p>
<p>Người đăng: {{$post->user?->name}}</p>
@endsection