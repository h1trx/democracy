# Documentación del Archivo HTML: Votaciones

## Descripción

Este archivo HTML representa la interfaz de usuario para el sistema de votaciones 2025. Permite a los usuarios ingresar su ID y PIN para autenticar su acceso.

## Estructura del Documento

### 1. Declaración del Documento

```html
<!DOCTYPE html>
<html lang="es">
```
- Define el tipo de documento y establece el idioma a español.

### 2. Sección `<head>`
#### Metaetiquetas
- <meta charset="UTF-8">: Establece la codificación de caracteres.
- <meta name="viewport" content="width=device-width, initial-scale=1.0">: Permite que la página sea responsiva en dispositivos móviles.

#### Título y Estilos
```html
<title>Votaciones</title>
<link rel="stylesheet" href="./src/css/style.css">
```
- Establece el título de la página y enlaza un archivo CSS externo.

#### Estilos Internos
```html
<style>
    /* Estilos para la superposición y los botones */
</style>
```
- Contiene estilos para la superposición de errores, el contenedor de selección y los botones.

### 3. Sección `<body>`
#### Contenido Principal
```html
<main>
    <section class="divs">
        <img src="https://res.cloudinary.com/dvdhtdzwp/image/upload/v1729639110/ier.png" alt="Logo de la institución">
    </section>
    <section class="divs">
        <div class="firt">
            <h1>Votaciones 2025</h1>
        </div>
        <div class="div_2">
            <div class="subDiv">
                <div class="one">
                    <input type="text" id="user" placeholder="Usuario" class="inputs">
                    <input type="password" id="psswd" placeholder="Pin" class="inputs">
                </div>
                <div class="two">
                    <button class="botoncito" id="botoncito">Send</button>
                </div>
            </div>
        </div>
    </section>
</main>
```
- Presenta el logo de la institución, un título y campos de entrada para el ID y el PIN, junto con un botón para enviar los datos.

#### Mensaje de Error
```html
<div id="eleccion" class="oee noVisible">
    <div class="select">
        <div class="contenido">
            <h3>Usuario o Pin incorrectos</h3>
            <div class="botoncitos">
                <button onclick="noVer()">Ok</button>
            </div>
        </div>
    </div>
</div>
```
- Un contenedor que muestra un mensaje de error si el ID o PIN son incorrectos.

### 4. Sección `<script>`
#### Funciones de JavaScript
- pop_up(): Muestra el mensaje de error al usuario.
- noVer(): Oculta el mensaje de error.

#### Función login(id, pin)
```js
async function login(id, pin) {
    const url = 'http://localhost:3000/api/user/login';
    const data = { id, pin };
    // Lógica para autenticar al usuario
}
```
- Envía una solicitud POST al servidor con el ID y el PIN del usuario.
- Maneja la respuesta y muestra un mensaje de error si la autenticación falla.

#### Event Listener
```js
const boton = document.getElementById('botoncito');
boton.addEventListener('click', () => {
    const id = Number(user.value);
    const password = Number(psswd.value);
    login(id, password);
});
```
- Asocia el botón "Send" a la función de autenticación.

## Notas Adicionales

- Asegúrate de que el servidor esté corriendo en http://localhost:3000 para que las solicitudes de autenticación funcionen correctamente.
- Este archivo HTML debe estar vinculado a los estilos y scripts adecuados para una experiencia de usuario completa.
