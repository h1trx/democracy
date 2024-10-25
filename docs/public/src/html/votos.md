# Documentación del Archivo HTML

## Descripción

Este archivo HTML representa una página de conteo de votos, donde se muestran los resultados de las elecciones para Personería y Contraloría. La página se conecta a un API para obtener y mostrar los datos de los votos.

## Estructura del Documento

### 1. Declaración del Documento

```html
<!DOCTYPE html>
<html lang="es">
```
- Declara el tipo de documento como HTML5 y establece el idioma como Español.

### 2. Sección `<head>`

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Votes page</title>
</head>
```
- Define la codificación de caracteres, el viewport para la responsividad y el título de la página.

#### 2.1 Estilos en línea
```html
<style>
    body {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    h1 {
        width: 100%;
        text-align: center;
    }
    h2 {
        width: 100%;
        text-align: center;
    }
    main {
        display: flex;
        justify-content: space-around;
    }
    .seccion {
        max-width: 100%;
        display: flex;
        justify-content: right;
    }
    .typeOne, .typeTwo {
        margin-top: 30px;
        width: 100%;
        display: flex;
    }
    .typeOne {
        justify-content: right;
    }
    .texts {
        max-width: 40%;
        text-align: center;
    }
    .foto img {
        width: 200px;
        margin: 0 10px;
        border-radius: 10px;
    }
</style>
```
- Aplica estilos a la página, incluyendo estilos para los encabezados, secciones y elementos de imagen.

### 3. Cuerpo del Documento

```html
<body>
    <h1>Conteo de votos</h1>
    <main>
        <div class="seccion">
            <div id="personeros">
                <h2>Personeria</h2>
            </div>
            <div class="seccion">
                <div id="contralores">
                    <h2>Contraloria</h2>
                </div>
            </div>   
        </div>
    </main>
</body>
```
- Contiene un encabezado principal que indica "Conteo de votos" y dos secciones para mostrar los resultados de Personería y Contraloría.

### 4. Scripts

```html
<script>
    async function getVotos () {
        const url = 'http://localhost:3000/api/vote/all';

        try {
            const req = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
            });
            const res = await req.json();
            let container = document.getElementById('personeros');
            let html = '';
            res.personeria.forEach(e => {
                html += `<div class="typeOne">
                            <div class="texts">
                                <h2>${e.nombre}</h2>
                                <p>Votos: ${e.id}</p>
                            </div>
                            <div class="foto">
                                <img src="${e.img}" alt="">
                            </div>
                        </div>`;
            });
            container.innerHTML += html;
            container = document.getElementById('contralores');
            html = '';
            res.contraloria.forEach(e => {
                html += `<div class="typeTwo">
                            <div class="foto">
                                <img src="${e.img}" alt="">
                            </div>
                            <div class="texts">
                                <h2>${e.nombre}</h2>
                                <p>Votos: ${e.votos}</p>
                            </div>
                        </div>`;
            });
            container.innerHTML += html;
        } catch (err) {
            console.log(err);
        }
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
            if (req.status == 401) {
                window.location.href = 'http://localhost:3000';
            }
            if (req.ok) getVotos(); 
        } catch (err) {
            window.location.href = 'http://localhost:3000';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        auth();
    });
</script>
```
- Incluye funciones para obtener los votos de la API y para autenticar al usuario. Se asegura de que solo los usuarios autenticados puedan acceder a los datos.

## Notas Adicionales

- Asegúrate de que las URL para la autenticación y la obtención de votos sean correctas.
- Esta página es fundamental para mostrar los resultados de las votaciones en tiempo real.
