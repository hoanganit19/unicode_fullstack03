<h1>Login</h1>
@if (session('error'))
<p style="color: red">{{session('error')}}</p>
@endif
@if (session('msg'))
<p style="color: green">{{session('msg')}}</p>
@endif
<form action="" method="POST">
    <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required>
    </div>
    <button type="submit">Login</button>
    <p><a href="{{route('auth.google')}}">Login with Google</a></p>
    @csrf
</form>