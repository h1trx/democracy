# Documentación del Módulo de Votación

## Resumen
Este módulo gestiona la funcionalidad de votación en una aplicación, permitiendo a los usuarios registrar votos para candidatos en diferentes posiciones. Utiliza un archivo JSON para almacenar la información de los candidatos y sus respectivos votos.

## Dependencias
- `fs/promises`: Módulo de Node.js para manejar el sistema de archivos de manera asíncrona.
- `path`: Módulo de Node.js para manejar rutas de archivos.
- `url`: Módulo de Node.js para trabajar con URLs.
- `user.service.js`: Módulo que proporciona la función `leerJson` para leer archivos JSON.

### Rutas de Archivos
```javascript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```
- Se definen `__filename` y `__dirname` para determinar la ruta del archivo actual, facilitando el manejo de rutas relativas.

### Funciones
#### votar(position, personId)
```js
async function votar(position, personId) { ... }
```
- Descripción: Registra un voto para un candidato específico en una posición dada.
- Parámetros:
    - `position`: Posición (por ejemplo, 'personeria' o 'contraloria') donde se contabiliza el voto.
    - `personId`: ID del candidato que recibe el voto.
- Manejo de Errores: Si la posición no se encuentra o si hay un error al leer o escribir el archivo, se registrará un mensaje de error en la consola.

## Clase `Vote`
### Constructor
```js
constructor() {
    this.db = [];
    this.loadDB('../db/candidatos.json');
}
```
- Descripción: Inicializa una instancia de la clase `Vote` y carga los datos de candidatos desde `candidatos.json`.

### Métodos
#### loadDB()
```js
async loadDB() { ... }
```
- Descripción: Carga los datos de candidatos desde el archivo `candidatos.json` y los almacena en `this.db`.

#### `all()`
```js
async all() { ... }
```
- Descripción: Devuelve todos los candidatos en la base de datos. Si la base de datos está vacía, se llama a `loadDB()` para cargarla.
- Retorno: Devuelve un objeto de promesa que resuelve con la lista de candidatos.

#### `personero(voto)`
```js
async personero(voto) { ... }
```
- Descripción: Registra un voto para un candidato en la posición de personero.
- Parámetros:
    - `voto`: ID del candidato que recibe el voto.
- Retorno: Devuelve un objeto de promesa que resuelve con un mensaje de confirmación.

#### `contralor(voto)`
```js
async contralor(voto) { ... }
```
- Descripción: Registra un voto para un candidato en la posición de contralor.
- Parámetros:
    - voto: ID del candidato que recibe el voto.
- Retorno: Devuelve un objeto de promesa que resuelve con un mensaje de confirmación.