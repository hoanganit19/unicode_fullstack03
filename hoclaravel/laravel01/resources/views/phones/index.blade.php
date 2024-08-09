@extends('layouts/main')
@section('content')
<h1>Danh sách số điện thoại</h1>
@foreach ($phones as $phone)
<p><a href="/phones/{{$phone->id}}/view">{{$phone->value}}</a></p>
@endforeach
@endsection