# Documentación del Proyecto Democracy

Este documento proporciona una visión general de la estructura y funcionalidad del proyecto **Democracy**, un sistema de votación en línea.

## Índice

- [Introducción](#introducción)

- [Base de Datos](#base-de-datos)
- [Middleware](#middleware)
- [Rutas](#rutas)

## Introducción

El proyecto **Democracy** es una aplicación web que permite a los usuarios votar en diferentes posiciones. Está diseñado para ser intuitivo y fácil de usar, con un enfoque en la seguridad y la autenticación.

## Base de Datos

La base de datos se compone de archivos JSON que almacenan información sobre los usuarios y los candidatos.

- **candidatos.json**: Contiene la información de los candidatos, incluyendo sus votos.
- **users.json**: Contiene los datos de los usuarios que pueden participar en la votación.

## Middleware

El middleware se utiliza para gestionar la autenticación y el acceso a las rutas protegidas de la aplicación. 

- **auth.handler.js**: Middleware que verifica el token de autenticación del usuario.

## Rutas

El sistema tiene varias rutas definidas para manejar las solicitudes del cliente:

- **/api/user**: Rutas relacionadas con la gestión de usuarios.
- **/api/vote**: Rutas para la gestión de votaciones.

## Servidor

El servidor está construido usando Express.js y maneja las solicitudes y respuestas de la aplicación. 

- **server.js**: Archivo principal que inicializa el servidor y configura las rutas.

## Servicios

Los servicios contienen la lógica de negocio de la aplicación:

- **user.service.js**: Maneja la autenticación y la gestión de usuarios.
- **vote.service.js**: Maneja las votaciones y el conteo de votos.

