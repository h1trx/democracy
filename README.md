# Sistema de votaciones

## Introducción
Este proyecto tiene como fin, desarrollar una plataforma de votaciones para la IER La Trinidad.

## Requisitos
- Node.js v20.17.0
- npm

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/h1trx/democracy.git
   ```

2. Instalar dependencias
    ```bash
    cd democracy
    npm install --production
    ```
    Para instalar dependencias de desarrollo (Las usadas para desarrollar el poryecto)
    ```bash
    npm install --dev
    ```
3. Uso
    ```bash
    npm start
    ```
    > **Nota:** El proyecto corre por defecto en el puerto 3000, si te encuentras con algún error que no puede correr el proyecto luego de instaladas las dependencias prueba a cambiarle el puerto, puedes ver como en [Documentación del server]().

    Para arrancar el proyecto en entorno de desarrollo
    ```bash
    npm run dev
    ```
## Estructura
    ```
    /democracy
    │
    ├── /db                             # Directorio JSON de almacenamiento
    │   ├── candidatos.json             # Fichero con la información de los candidatos
    │   └── users.json                  # Fichero con la información de los usuarios que pueden votar   
    │
    ├── /docs                           # Documentación del proyecto
    │   ├── /db                         # Documentación sobre las bases de datos
    │   │   ├── candidatos.md           # Documentación sobre la estructura y uso de candidatos.json
    │   │   └── users.md                # Documentación sobre la estructura y uso de users.json
    │   ├── /middleware                 # Documentación de los middleware utilizados en el proyecto
    │   │   └── auth.handler.md         # Documentación del middleware de autenticación
    │   ├── /public                     # Documentación de los archivos públicos de la aplicación
    │   │   ├── /src                    # Documentación de la estructura de código fuente del FrontEnd
    │   │   │   ├── /css                # Documentación sobre los estilos CSS
    │   │   │   │   └── style.md        # Documentación sobre el archivo de estilos
    │   │   │   ├── /html               # Documentación sobre las vistas HTML
    │   │   │   │   ├── contraloria.md  # Documentación sobre la vista contraloria.html
    │   │   │   │   ├── gracias.md      # Documentación sobre la vista gracias.html
    │   │   │   │   ├── personeria.md   # Documentación sobre la vista personeria.html
    │   │   │   │   └── votos.md        # Documentación sobre la vista votos.html
    │   │   │   └── /js                 # Documentación sobre el código JavaScript
    │   │   │       └── auth.md         # Documentación sobre el archivo auth.js
    │   │   └── index.md                # Documentación sobre la estructura de la página principal
    │   ├── /routes                     # Documentación sobre las rutas de la aplicación
    │   │   ├── routes.md               # Documentación sobre la configuración de rutas
    │   │   ├── user.routes.md          # Documentación sobre las rutas de usuario
    │   │   └── vote.routes.md          # Documentación sobre las rutas de votación
    │   ├── /server                     # Documentación sobre el servidor de la aplicación
    │   │   └── server.md               # Documentación del archivo server.js
    │   ├── /services                   # Documentación sobre los servicios del proyecto
    │   │   ├── user.service.md         # Documentación sobre el servicio de usuarios
    │   │   └── vote.service.md         # Documentación sobre el servicio de votación      
    │   └── README.md                   # Documento principal con información general del proyecto
    │
    ├── /middleware                     # Código fuente de los middleware
    │   └── auth.handler.js             # Middleware de autenticación
    │
    ├── /public                         # Archivos estáticos servidos por el servidor
    │   ├── /src                        # Código fuente del FrontEnd
    │   │   └── /css                    # Archivos CSS
    │   │   │   └── style.css           # Archivo de estilos
    │   │   ├── /html                   # Archivos HTML
    │   │   │   ├── contraloria.html    # Vista para la contraloría
    │   │   │   ├── gracias.html        # Vista de agradecimiento
    │   │   │   ├── personeria.html     # Vista para la personería
    │   │   │   └── votos.html          # Vista para el conteo de votos
    │   │   └── /js                     # Archivos JavaScript
    │   │       └── auth.js             # Archivo de autenticación en el FrontEnd
    │   └── index.html                  # Página raíz del servidor
    │
    ├── /routes                         # Rutas de la aplicación
    │   ├── routes.js                   # Archivo principal de rutas
    │   ├── user.routes.js              # Rutas relacionadas con usuarios
    │   └── vote.routes.js              # Rutas relacionadas con votaciones
    │
    ├── /server                         # Código fuente del servidor
    │   └── server.js                   # Archivo principal del servidor
    │
    ├── /services                       # Servicios de la aplicación
    │   ├── user.service.js             # Servicio que maneja la lógica de usuarios
    │   └── vote.service.js             # Servicio que maneja la lógica de votaciones
    ├── package-lock.json               # Archivo que gestiona las dependencias del proyecto
    ├── package.json                    # Archivo que define las dependencias y scripts del proyecto
    ├── .gitignore                      # Archivos y carpetas a ignorar por Git
    └── README.md                       # Documentación general del proyecto
    ```