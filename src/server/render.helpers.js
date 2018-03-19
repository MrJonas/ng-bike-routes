import serialize from "serialize-javascript";

export const getHtml = (initialData, markup) =>
`<!DOCTYPE html>
<html lang="lt">
<head>
<meta name="theme-color" content="#292b2c"/>
<meta charset="UTF-8">
<meta name="viewport"
content="width=device-width">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
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