<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicode Academy</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css">
    @vite('resources/css/app.css')
</head>

<body>
    <header>
        <h1 class="text-center">Unicode Academy</h1>
    </header>
    <main>
        <div class="container">
            @yield('content')
        </div>
    </main>
    <footer>
        <p class="text-center">Copyright &copy; 2024</p>
    </footer>
    @vite('resources/js/app.js')
</body>

</html>