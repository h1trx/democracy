# Documentación del Servidor Express

## Resumen
Este código configura un servidor web utilizando Express.js. El servidor maneja rutas, permite el uso de CORS, y sirve archivos estáticos desde un directorio público. Además, gestiona la API y envía archivos HTML específicos en respuesta a ciertas solicitudes.

## Dependencias
- `express`: Framework web para Node.js.
- `cors`: Middleware para permitir solicitudes CORS.
- `path`: Módulo de Node.js para manejar rutas de archivos.
- `process`: Módulo de Node.js para acceder a información sobre el proceso en ejecución.

## Configuración Inicial
```javascript
const PORT = 3000;

const app = express();
```
- Se define el puerto en el que el servidor escuchará (3000) y se crea una instancia de la aplicación Express.

## Middleware
```js
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(cwd(), './public')));
```
- `app.disable("x-powered-by")`: Desactiva el encabezado `X-Powered-By` para mayor seguridad.
- `app.use(cors())`: Habilita CORS para permitir solicitudes desde diferentes dominios.
- `app.use(express.json())`: Middleware que permite analizar cuerpos de solicitud JSON.
- `app.use(express.static(path.join(cwd(), './public')))`: Sirve archivos estáticos desde el directorio `public`.

## Rutas

### Ruta raíz
```js
app.get('/', (req, res) => {
    res.sendFile(path.join(cwd(), './public/index.html'));
});
```
- Método: `GET`
- Descripción: Envía el archivo `index.html` cuando se accede a la raíz del servidor.

### Ruta `/personero`
```js
app.get('/personero', (req, res) => {
    res.sendFile(path.join(cwd(), './public/src/html/personeria.html'));
});
```
- Método: `GET`
- Descripción: Envía el archivo `personeria.html` para la votación de "personero".

### Ruta `/contralor`
```js 
app.get('/contralor', (req, res) => {
    res.sendFile(path.join(cwd(), './public/src/html/contraloria.html'));
});
```
- Método: `GET`
- Descripción: Envía el archivo `contraloria.html` para la votación de "contralor".

### Ruta `/gracias`
```js
app.get('/gracias', (req, res) => {
    res.sendFile(path.join(cwd(), './public/src/html/gracias.html'));
});
```
- Método: `GET`
- Descripción: Envía el archivo `gracias.html` como agradecimiento tras la votación.

### Ruta /votos
```js
app.get('/votos', (req, res) => {
    res.sendFile(path.join(cwd(), './public/src/html/votos.html'));
});
```
- Método: `GET`
- Descripción: Envía el archivo `votos.html` que muestra el conteo de votos.

## API Routes
```js
routerApi(app);
```
- Se inicializa el enrutador de la API, que maneja las rutas relacionadas con la votación y la autenticación.

## Manejo de errores
```js
app.use((req, res) => {
    res.status(404).send("Bad Request");
});
```
- Se define un middleware para manejar solicitudes no encontradas, enviando un estado 404 y un mensaje "Bad Request".

## Inicio del Servidor
```js
app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
});
```
- El servidor escucha en el puerto definido y muestra un mensaje en la consola al iniciarse.
