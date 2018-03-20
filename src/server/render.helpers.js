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
<link rel="icon" href="data:;base64,=">
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