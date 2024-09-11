<h1>Register</h1>
@if (session('error'))
<p style="color: red">{{session('error')}}</p>
@endif
<form action="" method="POST">
    <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
        @error('name')
        <p style="color: red">{{$message}}</p>
        @enderror
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        @error('email')
        <p style="color: red">{{$message}}</p>
        @enderror
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
        @error('password')
        <p style="color: red">{{$message}}</p>
        @enderror
    </div>
    <button type="submit">Register</button>
    @csrf
</form>