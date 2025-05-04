<?php
$id = $_GET['id'] ?? '';
$archivo = "paginas/" . basename($id) . ".html";

if (file_exists($archivo)) {
    $contenido = file_get_contents($archivo);
} else {
    $contenido = "<p><strong>Página no encontrada.</strong></p>";
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Página <?= htmlspecialchars($id) ?></title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        .volver { margin-top: 20px; display: block; }
    </style>
</head>
<body>
    <h1>Página <?= htmlspecialchars($id) ?></h1>
    <div>
        <?= $contenido ?>
    </div>
    <a href="index.html" class="volver">← Volver al tablero</a>
</body>
</html>
