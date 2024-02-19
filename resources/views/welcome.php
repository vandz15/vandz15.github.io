<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-app-env="{{ env('APP_ENV') }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Sinergy Mechanic Electrical</title>

  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico">

  @viteReactRefresh
  @vite('resources/app/index.jsx')

</head>

<body>
  <div id="root"></div>

  <script src="{{ asset('assets/jquery/jquery-3.1.1.min.js') }}">
  </script>
  <script src="{{ asset('assets/bootstrap/js/bootstrap.min.js') }}"></script>
  <script src="{{ asset('assets/easing/jquery.easing.min.js') }}"></script>

  <script src="{{ asset('assets/jquery/jquery.animateNumber.min.js') }}"></script>
  <script src="{{ asset('assets/jquery/plugins.js') }}"></script>
  <script src="{{ asset('assets/owl-carousel/js/owl.carousel.js') }}"></script>
  <script src="{{ asset('assets/js/custom.js') }}"></script>
</body>

</html>