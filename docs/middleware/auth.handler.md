# Documentación del Middleware: verifyToken

## Descripción

El middleware `verifyToken` se encarga de verificar la validez de un token JWT (JSON Web Token) proporcionado en las cabeceras de la solicitud. Este middleware se utiliza para autenticar a los usuarios en rutas protegidas.

## Dependencias

- `jsonwebtoken`: Biblioteca utilizada para manejar la creación y verificación de tokens JWT.

## Configuración

- **SECRET_KEY**: Clave secreta utilizada para firmar y verificar el token. Debe ser mantenida en secreto.

```javascript
const SECRET_KEY = "gdjlshhkfnsgsid";
```
## Función: verifyToken
### Sintaxis
```js
export function verifyToken() { ... }
```
## Uso
Este middleware se debe usar en las rutas que requieren autenticación. Cuando se aplica, verifica si el token está presente y si es válido.
### Comportamiento
1. Obtener el Token: Se extrae el token del encabezado ````auth```` de la solicitud.
    ```js
    const token = req.headers['auth'];
    ```
2. Verificar la Existencia del Token:

    - Si no se proporciona un token, se devuelve un estado 401 (Unauthorized).
    ```js
    if (!token) {
        res.status(401).send("Unauthorized");
        }
    ```
3. Verificar el Token:
    - Si el token está presente, se verifica utilizando la clave secreta.
    - Si hay un error en la verificación, se devuelve un estado 401 (Unauthorized).
    ```js
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(401).send(" post Unauthorized");
        }
    });

    ```
4. Agregar Información del Usuario:

    - Si el token es válido, se decodifica y la información del usuario se agrega al objeto ````req````.
    ```js
    req.user = decoded;
    next();
    ```
### Ejemplo de uso
```js
import { verifyToken } from './path/to/middleware';

// Aplicar el middleware en una ruta
app.get('/ruta-protegida', verifyToken(), (req, res) => {
    res.send(`Hola, ${req.user.name}`);
});
```
## Notas adicionales
- Asegúrate de manejar adecuadamente la clave secreta y no exponerla en el código fuente.
- Este middleware debe ser utilizado en rutas que requieren que el usuario esté autenticado.