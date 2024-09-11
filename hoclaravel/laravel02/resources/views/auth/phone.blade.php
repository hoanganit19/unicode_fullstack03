<h1>Phone Update</h1>
<p>Please update phone number to continue</p>
@if (session('error'))
<p style="color: red">{{session('error')}}</p>
@endif
@if (session('msg'))
<p style="color: green">{{session('msg')}}</p>
@endif
<form action="" method="POST">
    <div>
        <label for="phone">Phone</label>
        <input type="text" name="phone" id="phone" placeholder="Phone..." required>
        @error('phone')
        <p style="color: red">{{$message}}</p>
        @enderror
    </div>
    <button type="submit">Update</button>
    @csrf
</form>