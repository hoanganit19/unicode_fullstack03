@extends('layouts/main')
@section('content')
<h1>Thay đổi khóa học</h1>
<form action="" method="POST">
    @foreach ($courses as $course)
    <p><input type="checkbox" name="courses[]" value="{{ $course->id }}" id="" {{in_array($course->id, $userCourses) ? 'checked' : ''}}> {{$course->name}}</p>
    @endforeach
    <button class="btn btn-primary">Lưu thay đổi</button>
</form>
@endsection
