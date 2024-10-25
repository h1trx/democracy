# Documentación del Módulo de Usuario

## Resumen
Este módulo proporciona funcionalidades para manejar la autenticación de usuarios mediante JWT (JSON Web Tokens) y la lectura de datos de archivos JSON. Incluye la clase `Persona`, que gestiona la carga y autenticación de usuarios a partir de un archivo de datos.

## Dependencias
- `fs/promises`: Módulo de Node.js para trabajar con el sistema de archivos de manera asíncrona.
- `path`: Módulo de Node.js para manejar rutas de archivos.
- `url`: Módulo de Node.js para trabajar con URLs.
- `jsonwebtoken`: Biblioteca para crear y verificar tokens JWT.

## Variables Globales
```javascript
const SECRET_KEY = "gdjlshhkfnsgsid";
```
- SECRET_KEY: Clave secreta utilizada para firmar los tokens JWT.

## Rutas de ficheros
```js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```
- Se definen __filename y __dirname para determinar la ruta del archivo actual, facilitando el manejo de rutas relativas.

## Funciones
### `Funciones`
```js
export async function leerJson(file) { ... }
```
- Descripción: Lee un archivo JSON y devuelve su contenido como un objeto JavaScript.
- Parámetros:
    - `file`: Ruta del archivo JSON a leer.
- Retorno: Devuelve los datos de los usuarios o candidatos, dependiendo del archivo.
- Manejo de Errores: Si ocurre un error al leer o parsear el archivo, se registra en la consola.

## Clase `Persona`
### Contructor
```js
constructor() {
    this.db = [];
    this.loadDB('../db/users.json');
}
```
- Descripción: Inicializa una instancia de la clase Persona y carga los datos de usuarios desde users.json.

### Metodos
#### `loadDB()`
```js
async loadDB() { ... }
```
- Descripción: Carga los datos de usuarios desde el archivo `users.json` y los almacena en `this.db`.

#### `all()`
```js
async all() { ... }
```
- Descripción: Devuelve todos los usuarios en la base de datos. Si la base de datos está vacía, se llama a `loadDB()` para cargarla.

#### `login(data)`
```js
async login(data) { ... }
```
- Descripción: Verifica las credenciales de un usuario y genera un token JWT si la autenticación es exitosa.
- Parámetros:
    - data: Objeto que contiene `id` y `pin` del usuario.
- Retorno: Devuelve un token JWT si las credenciales son válidas; de lo contrario, un mensaje de error.

#### `#filterID(id)`
```js
async #filterID(id) { ... }
```
- Descripción: Filtra la base de datos para encontrar un usuario por su id.
- Parámetros:
    - `id`: ID del usuario a buscar.
- Retorno: Devuelve el usuario correspondiente o un mensaje de error si no se encuentra.

#### `auth(req)`
```js
async auth(req) { ... }
```
- Descripción: Verifica la autenticidad del token JWT enviado en los encabezados de la solicitud.
- Parámetros:
    - `req`: Objeto de la solicitud que contiene los encabezados.
- Retorno: Devuelve el nombre del usuario si el token es válido; de lo contrario, un mensaje de error.