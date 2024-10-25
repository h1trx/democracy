# Documentación del Archivo HTML

## Descripción

Este archivo HTML representa una página de agradecimiento que se muestra a los usuarios después de participar en la votación. Incluye un mensaje de agradecimiento y redirige a los usuarios a la página principal después de un breve período.

## Estructura del Documento

### 1. Declaración del Documento

```html
<!DOCTYPE html>
<html lang="en">
```
- Declara el tipo de documento como HTML5 y establece el idioma como inglés.

### 2. Sección `<head>`

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thanks!!</title>
</head>
```
- Define la codificación de caracteres, el viewport para la responsividad y el título de la página.

#### 2.1 Estilos en línea

```html
<style>
    section {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        width: 100%;
        height: 90vh;
        display: flex;
        align-items: center;
    }
    section h1 {
        text-align: center;
        font-size: 100px;
    }
</style>
```
- Aplica estilos a la sección principal y al encabezado, centrándolos vertical y horizontalmente.

### 3. Cuerpo del Documento

```html
<body>
    <main>
        <section>
            <h1>¡GRACIAS POR SU PARTICIPACION!</h1>
        </section>
    </main>
</body>
```
- Contiene un encabezado que agradece a los usuarios por su participación en la votación.

### 4. Scripts

```html
<script>
    localStorage.removeItem('auth');
    setTimeout(() => {
        window.location.href = 'http://localhost:3000/'
    }, 7000)
</script>
```
- Elimina el token de autenticación almacenado en `localStorage` y redirige al usuario a la página principal después de 7 segundos.

## Notas Adicionales

- Asegúrate de que la redirección apunte a la URL correcta de tu aplicación.
- Este archivo es fundamental para mejorar la experiencia del usuario al proporcionar un feedback claro tras la votación.
