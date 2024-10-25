# Documentación para el Router de Votación

## Resumen
Este código configura las rutas relacionadas con el manejo de votos en una aplicación Node.js utilizando Express.

## Dependencias
- `express`: Framework web para Node.js.
- `Vote`: Clase del servicio que maneja la lógica de votación.
- `verifyToken`: Middleware para verificar tokens de autenticación.

## Código

### Importaciones
```javascript
import { Router } from "express";
import { Vote } from "../services/vote.service.js";
import { verifyToken } from "../middleware/auth.handler.js";
```
- Se importa Router de Express para manejar rutas.
- Se importa Vote del servicio de votación para realizar operaciones relacionadas con votos.

## Inicialización del Router
```js
const router = Router();
```
- Se crea una nueva instancia de `Router`.

## Rutas
1. Ruta: `/all`
```js
router.post('/all', (req, res) => {
    const votar = new Vote();
    votar.all().then(resolve => {
        res.json(resolve);
    });
});
```
- Método: `POST`
- Descripción: Crea una nueva instancia de `Vote` y obtiene todos los votos. Devuelve la lista en formato JSON.

2. Ruta: `/personero`
```js
router.post('/personero', (req, res) => {
    const { voto } = req.body;   
    const votar = new Vote();
    votar.personero(voto).then(resolve => {
        res.json(resolve);
    });
});
```
- Método: `POST`
- Descripción: Recibe el voto del cuerpo de la solicitud, crea una nueva instancia de `Vote` y llama al método `personero`. Devuelve la respuesta en formato JSON.

3. Ruta: `/contralor`
```js
router.post('/contralor', (req, res) => {
    const { voto } = req.body;
    const votar = new Vote();
    votar.contralor(voto).then(resolve => {
        res.json(resolve);
    });
});
```
- Método: `POST`
- Descripción: Recibe el voto del cuerpo de la solicitud, crea una nueva instancia de `Vote` y llama al método `contralor`. Devuelve la respuesta en formato JSON.

## Exportación
```js
export default router;
```
- Se exporta el router para su uso en otras partes de la aplicación.