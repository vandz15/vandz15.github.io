<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-app-env="{{ env('APP_ENV') }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Sinergy Mechanic Electrical</title>

  <meta content="Sinergy Mechanic Electrical" property="og:title" />
  <meta content="Sinergy Mechanic Electrical ialah Teknisi Listrik / Tukang Listrik Panggilan yg melayani jasa perbaikan Listrik untuk Rumah, Ruko, Kantor, &amp; Industri." property="og:description" />
  <meta content="" property="og:image" />
  <meta content="simetric.com" property="og:url" />

  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico">

  @viteReactRefresh

  @vite("resources/app/index.jsx")


</head>

<body id="root"></body>

</html>