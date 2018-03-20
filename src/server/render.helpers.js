import serialize from "serialize-javascript";

export const getHtml = (initialData, markup) =>
`<!DOCTYPE html>
<html lang="lt">
<head>
<meta name="theme-color" content="#292b2c"/>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="title" content="Dvira&#x10D;i&#x173; mar&#x161;rutai Lietuvoje">
<meta name="og:title" content="Dvira&#x10D;i&#x173; mar&#x161;rutai Lietuvoje">
<meta name="description" content="Mar&#x161;rut&#x173; &#x17E;em&#x117;lapis, lankytinos vietos, &#x12F;sp&#x16B;d&#x17E;iai bei patarimai &#x2014; visk&#x105; rasite bloge apie turistinius &#x17E;ygius dvira&#x10D;iais.">
<meta name="og:description" content="Mar&#x161;rut&#x173; &#x17E;em&#x117;lapis, lankytinos vietos, &#x12F;sp&#x16B;d&#x17E;iai bei patarimai &#x2014; visk&#x105; rasite bloge apie turistinius &#x17E;ygius dvira&#x10D;iais.">
<meta name="og:image" content="http://dviraciumarsrutai.lt/bike.jpg">

<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<title>Dviračių maršrutai</title>
<link rel="stylesheet" href="/css/main.css">
<script src="/bundle.js" defer></script>
<script>window.__initialData__ = ${serialize(initialData)}</script>
</head>
<body>
<div id="root">${markup}</div>
</body>
</html>
`;