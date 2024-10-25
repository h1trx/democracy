# Documentación para el Router de Usuario

## Resumen
Este código configura las rutas relacionadas con el manejo de usuarios en una aplicación Node.js utilizando Express.

## Dependencias
- `express`: Framework web para Node.js.
- `Persona`: Clase del servicio que maneja la lógica de usuarios.
- `verifyToken`: Middleware para verificar tokens de autenticación.

## Código

### Importaciones
```javascript
import { Router } from "express"; 
import { Persona } from "../services/user.service.js";
import { verifyToken } from "../middleware/auth.handler.js";
```
- Se importa `Router` de Express para manejar rutas.
- Se importa `Persona` del servicio de usuarios para realizar operaciones relacionadas con usuarios.
- Se importa `verifyToken` para la verificación de autenticación.

### Inicialización del Router
```js
const router = Router();
```
- Se crea una nueva instancia de `Router`.

## Rutas
1. Ruta: `/create`
```js
router.post('/create', (req, res) => {
    const persona = new Persona();
    persona.all().then((resolve) => {
        res.json(resolve);
    });
});
```
- Método: `POST`
- Descripción: Crea una nueva instancia de Persona y obtiene todas las personas. Devuelve la lista en formato JSON.

2. Ruta: `/login`
```js
router.post('/login', (req, res) => {
    const {id, pin} = req.body;
    const data = { id, pin };
    const persona = new Persona();
    persona.login(data).then((resolve) => {
        res.json(resolve);
    }).catch(err => {
        res.json(err);
    });
});
```
- Método: `POST`
- Descripción: Recibe `id` y `pin` del cuerpo de la solicitud, crea una nueva instancia de `Persona` y llama al método `login`. Devuelve la respuesta en formato JSON, o un error si falla.

3. Ruta: `/auth`
```js
router.post('/auth', (req, res) => {
    const persona = new Persona();
    persona.auth(req).then(resolve => {
        res.json(resolve);
    }).catch(err => {
        res.status(401).send(err);
    });
});
```
- Método: `POST`
- Descripción: Verifica la autenticación del usuario. Devuelve una respuesta en formato JSON si tiene éxito, o un error con el estado 401 si falla.

## Exportación
```js
export default router;
```
- Se exporta el router para su uso en otras partes de la aplicación.