# Documentación del Archivo HTML

## Descripción

Este archivo HTML representa la interfaz de usuario para la votación de candidatos a Contraloría. Contiene una lista de candidatos, cada uno con su foto y un botón para votar.

## Estructura del Documento

### 1. Declaración del Documento

```html
<!DOCTYPE html>
<html lang="es">
```
- Declara el tipo de documento como HTML5 y establece el idioma como español.

### 2. Sección `<head>`

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contraloria</title>
</head>
```
- Define la codificación de caracteres, el viewport para la responsividad, y el título de la página.

#### 2.1 Estilos en línea
```html
<style>
    * {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>
```
- Aplica una fuente sans-serif a todos los elementos.

### 3. Títulos y Contenedores

```html
<div class="mainTittle">
    <h1>Elija un candidato para Contraloria</h1>
</div>
```
- Contiene el título principal de la página.

### 4. Lista de Candidatos

```html
<div class="lista">
    <div class="mydiv">
        <p class="fotico"><img src="https://http.cat/images/200.jpg" alt=""></p>
        <p>Amilkar Antonio Poloh Erazo</p>
        <button class="botonxd" onclick="pop_up(1)">Votar</button>
    </div>
</div>
```
- Cada candidato se presenta en un contenedor `.mydiv`, que incluye una imagen, un nombre y un botón para votar.

### 5. Ventana de Confirmación

```html
<div id="eleccion" class="oee noVisible">
    <div class="select">
        <div class="contenido">
            <h3>¿Está seguro de su elección?</h3>
            <div class="botoncitos">
                <button onclick="auth()">Si</button>
                <button onclick="noVisible()">No</button>
            </div>
        </div>
    </div>
</div>
```
- Se muestra una ventana modal para confirmar la elección del candidato.

### 6. Scripts `<script>`

```js
let voto;
function pop_up (id) {
    const eleccion = document.getElementById('eleccion')
    eleccion.classList.remove('noVisible')
    eleccion.classList.add('visible')
    voto = id
}
```
- Define funciones JavaScript para manejar la lógica de votación y la interfaz de usuario.

#### 6.1 Función de autenticación

```js
async function auth () {
    const auth= localStorage.getItem('auth');
    const url = 'http://localhost:3000/api/user/auth'
}
```
- Maneja la autenticación del usuario antes de permitirle votar.

#### 6.2 Función de votación

```js
async function votar () {
    const auth= localStorage.getItem('auth');
    const url = 'http://localhost:3000/api/vote/contralor'
    const data = {'voto': voto}
}
```
- Envía el voto al servidor y redirige al usuario a una página de agradecimiento si la votación es exitosa.

## Estilos CSS

### 1. General

```css
* {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
```
- Aplica una fuente a todos los elementos.

### 2. Estilo de Botón

```css
.botonxd {
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-size: 22.5px;
    color: white;
    background-color: black;
}
```
- Define el estilo de los botones de votación.

## Notas Adicionales

- Asegúrate de que la URL en el script coincida con el backend de tu aplicación para el funcionamiento correcto.
- La interacción del usuario está gestionada a través de eventos y funciones JavaScript que modifican la interfaz en tiempo real.
