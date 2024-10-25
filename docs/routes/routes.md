# Documentación para el Router API

## Resumen
Este código configura las rutas de la API para una aplicación de Node.js utilizando Express.

## Dependencias
- `express`: Un marco de aplicación web para Node.js.

## Desglose del Código

### Importación de Dependencias
```javascript
import { Router } from "express";
import userRouter from "./user.routes.js";
import voteRouter from "./vote.routes.js";
```
- Se importa la clase Router de Express para crear controladores de rutas modulares.
- Se importan dos controladores de rutas, userRouter y voteRouter, desde sus respectivos archivos.

## Función: `routerApi(app)`
```js
export function routerApi(app) { 
    const router = Router();
    app.use('/api', router);
    router.use('/user', userRouter);
    router.use('/vote', voteRouter);
}
```
- Parámetros:
    - app: La instancia de la aplicación Express.

- Funcionalidad:
    - Se crea una nueva instancia de router.
    - Se establece la ruta base /api para todas las rutas definidas en este router.
    - Las rutas /user y /vote son manejadas por userRouter y voteRouter, respectivamente.

## Uso

Para utilizar este router en tu aplicación Express, llama a la función routerApi y pasa la instancia de app.

### Ejemplo:

```js
import express from 'express';
import { routerApi } from './ruta/al/archivo.js';

const app = express();
routerApi(app);

```