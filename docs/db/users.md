# Documentación de Usuarios

## Estructura de Datos

El objeto contiene una propiedad `usuarios`, que es un array que almacena información sobre los usuarios registrados en el sistema.

```json
{
    "usuarios": [ ... ]
}
```
## Propiedades
### usuarios
- Array que contiene los usuarios del sistema.
- Cada usuario tiene la siguiente estructura:
  - id (Número): Documento de identidad del usuario.
  - pin (Número): Código PIN utilizado para la autenticación del usuario.
  - name (String): Nombre del usuario.
  - voto (Booleano): Estado del voto del usuario (true si ha votado, false si no).

### Ejemplo de usuario:
```json
{
    "id": 1044848456,
    "pin": 10297,
    "name": "Guillo",
    "voto": false
}
```
### Ejemplo completo:
```json
{
    "usuarios": [
        { "id": 1044848456, "pin": 10297, "name": "Guillo", "voto": false },
        { "id": 1062966674, "pin": 83923, "name": "Jose", "voto": false },
        { "id": 1037372822, "pin": 78997, "name": "Maria", "voto": false }
    ]
}
```
## Notas Adicionales
- La propiedad ````voto```` indica si el usuario ya ha emitido su voto en el sistema.
- Es importante mantener la privacidad y seguridad de los datos del usuario, especialmente en lo que respecta al PIN.
