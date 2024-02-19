<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-app-env="{{ env('APP_ENV') }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Sinergy Mechanic Electrical</title>

  @viteReactRefresh

  @vite("resources/app/index.jsx")

  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico">
</head>

<body>
  <div id="root"></div>
</body>

</html>