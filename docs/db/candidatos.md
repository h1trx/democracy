# Documentación de Candidatos

## Estructura de Datos

El objeto contiene dos propiedades: `personeria` y `contraloria`. Cada propiedad es un array que almacena información sobre los candidatos en cada categoría.

```json
{
  "personeria": [ ... ],
  "contraloria": [ ... ]
}
```
## Propiedades
### personeria

- Array que contiene los candidatos para la elección de la personería.
- Cada candidato tiene la siguiente estructura:
  - id (Número): Identificador único del candidato.
  - nombre (String): Nombre completo del candidato.
  - votos (Número): Número de votos recibidos por el candidato.
  - img (String): URL de la imagen del candidato.

### Ejemplo de candidato en ```personeria```:
```json
{
  "id": 1,
  "nombre": "Amilkar Antonio Poloh Erazo",
  "votos": 8,
  "img": "https://http.cat/images/100.jpg"
}
```
## contraloria
- Array que contiene los candidatos para la elección de la contraloría.
- La estructura de cada candidato es similar a la de ```personeria```:
  - id (Número): Identificador único del candidato.
  - nombre (String): Nombre completo del candidato.
  - votos (Número): Número de votos recibidos por el candidato.
  - img (String): URL de la imagen del candidato.

### Ejemplo de candidato en ```contraloria```:
```json
{
  "id": 1,
  "nombre": "Guillermo Ivan Salgado Sandoval",
  "votos": 2,
  "img": "https://http.cat/images/100.jpg"
}
```
### Ejemplo completo:
```json
{
  "personeria": [
    {
      "id": 1,
      "nombre": "Guillermo Ivan Salgado Sandoval",
      "votos": 8,
      "img": "https://http.cat/images/100.jpg"
    },
    {
      "id": 2,
      "nombre": "jose Angel Franco Alcala",
      "votos": 3,
      "img": "https://http.cat/images/100.jpg"
    },
    {
      "id": 3,
      "nombre": "Amilkar Antonio Poloh Erazo",
      "votos": 1,
      "img": "https://http.cat/images/100.jpg"
    }
  ],
  "contraloria": [
    {
      "id": 1,
      "nombre": "Guillermo Ivan Salgado Sandoval",
      "votos": 2,
      "img": "https://http.cat/images/100.jpg"
    },
    {
      "id": 2,
      "nombre": "jose Angel Franco Alcala",
      "votos": 6,
      "img": "https://http.cat/images/100.jpg"
    },
    {
      "id": 3,
      "nombre": "Amilkar Antonio Poloh Erazo",
      "votos": 1,
      "img": "https://http.cat/images/100.jpg"
    }
  ]
}
```
## Notas Adicionales
- La propiedad ````img```` debe contener una URL válida que apunte a una imagen representativa del candidato.
- Los votos son un indicador de la popularidad o apoyo recibido por cada candidato en su respectiva categoría.