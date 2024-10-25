# Documentación del Archivo HTML

## Descripción

Este archivo HTML representa una página donde los usuarios pueden elegir un candidato para la Personería. Incluye una lista de candidatos y permite a los usuarios votar. También incluye un mecanismo de confirmación antes de realizar el voto.

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
    <title>Personeria</title>
</head>
```
- Define la codificación de caracteres, el viewport para la responsividad y el título de la página.

#### 2.1 Estilos en línea

```html
<style>
    * {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .mainTittle {
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }
    h1 {
        font-size: 80px;
    }
    .lista {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }
    .fotico {
        width: 350px;
    }
    .fotico img {
        width: 100%;
        border-radius: 5px;
    }
    .mydiv p {
        text-align: center;
    }
    .botonxd {
        width: 100%;
        height: 30px;
        border: none;
        border-radius: 5px;
        font-size: 22.5px;
        color: white;
        background-color: black;
    }
    .botonxd:hover {
        background-color: #1e2121;
    }
    .oee {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgb(0, 0, 0, 0.7);
    }
    .select {
        background-color: white;
        position: fixed;
        top: 30%;
        left: 25%;
        width: 50%;
        height: 300px;
        border-radius: 15px;
    }
    .contenido {
        width: 80%;
        height: 70%;
        text-align: center;
        margin: 5% auto;
    }
    .contenido h3 {
        font-size: 50px;
    }
    .botoncitos {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }
    .botoncitos button {
        width: 30%;
        height: 40px;
        border: none;
        border-radius: 5px;
        font-size: 22.5px;
        background-color: black;
        color: white;
    }
    .botoncitos button:hover {
        background-color: #1e2121;
    }
    .visible {
        display: block;
    }
    .noVisible {
        display: none;
    }
</style>
```
- Aplica estilos a la sección principal, títulos, lista de candidatos, botones y ventanas emergentes.

### 3. Cuerpo del Documento

```html
<body>
    <main>
        <div class="mainTittle">
            <h1>Elija un candidato para Personeria</h1>
        </div>
        <div class="lista">
            <div class="mydiv">
                <p class="fotico"><img src="https://http.cat/images/200.jpg" alt=""></p>
                <p>Amilkar Antonio Poloh Erazo</p>
                <button class="botonxd" onclick="pop_up(1)">Votar</button>
            </div>
            <div class="mydiv">
                <p class="fotico"><img src="https://http.cat/images/101.jpg" alt=""></p>
                <p>Eduardo Antonio Trukele 🤑🤙</p>
                <button class="botonxd" onclick="pop_up(2)">Votar</button>
            </div>
            <div class="mydiv">
                <p class="fotico"><img src="https://http.cat/images/102.jpg" alt=""></p>
                <p>Nicolas Fernando Maduro Ramirez 😵‍💫🤙 </p>
                <button class="botonxd" onclick="pop_up(3)">Votar</button>
            </div>
        </div>
    </main>
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
</body>
```
- Contiene un encabezado que solicita a los usuarios que elijan un candidato, una lista de candidatos con sus imágenes y botones para votar.

### 4. Scripts

```html
<script>
    let voto;
    function pop_up (id) {
        const eleccion = document.getElementById('eleccion');
        eleccion.classList.remove('noVisible');
        eleccion.classList.add('visible');
        voto = id;
    }
    function noVisible () {
        const eleccion = document.getElementById('eleccion');
        eleccion.classList.add('noVisible');
    }
    async function auth () {
        const auth = localStorage.getItem('auth');
        const url = 'http://localhost:3000/api/user/auth';

        try {
            const req = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                    'auth': auth
                },
            });

            if (req.ok) {
                votar();
            }
        } catch (err) {
            console.error(err);
        }
    }
    async function votar () {
        const auth = localStorage.getItem('auth');
        const url = 'http://localhost:3000/api/vote/personero';
        const data = {'voto': voto};

        try {
            const req = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                    'auth': auth
                },
                body: JSON.stringify(data)
            });
            console.log(req.ok);

            if (req.ok) {
                window.location.href = 'http://localhost:3000/contralor';
            }
        } catch (err) {
            console.error(err);
        }
    }
</script>
```
- Incluye funciones para manejar la selección de votos, la autenticación del usuario y el envío del voto al servidor.

## Notas Adicionales

- Asegúrate de que las URL para la autenticación y el envío de votos sean correctas.
- Esta página es esencial para el proceso de votación, ya que permite a los usuarios elegir a su candidato para la Personería.
