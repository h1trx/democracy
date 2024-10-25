# Documentación del Archivo CSS

## Descripción

Este archivo CSS define los estilos para la interfaz de usuario del sistema de votaciones. Se centra en la disposición, colores, y estilos de los elementos de la página.

## Estructura de Estilos
### 1. Estilo General
```css
body {
    /*background-color:#e6f7df ;*/
    font-family: monospace;
}
```
- Establece la fuente general de la página como monospace.
- El color de fondo está comentado y no se aplica, pero se sugiere un tono verde claro.

### 2. Estilos de main
```css
main {
    display: flex;
    flex-direction: row;
}
```
- Define que el contenedor principal utilizará un diseño flexible en dirección horizontal.

### 3. Estilos de las Secciones

```css
.divs {
    width: 50%;
    position: relative;
}
```
- Cada sección .divs ocupa el 50% del ancho disponible y es relativa para permitir el posicionamiento de elementos dentro.

```css
.divs:first-of-type img {
    width: 80%;
    height: 80vh;
    position: absolute;
    left: 10%;
    top: 10vh;
}
```
- La primera sección con imagen tiene un ancho del 80%, altura del 80% de la vista del puerto y está posicionada absolutamente.

### 4. Estilos de Entradas

```css
.inputs {
    height: 35px;
    width: 45%;
    border-radius: 20px;
    font-size: 15px;
    border: 2px solid black;
    color: black;
}
```
- Define el estilo de los campos de entrada: altura, ancho, bordes redondeados, tamaño de fuente, y color de borde y texto.

### 5. Estilo de .div_2

```css
.div_2 {
    position: relative;
    width: 100%;
}
```
- Esta clase ocupa todo el ancho disponible y es relativa para el posicionamiento.

### 6. Estilos para Títulos

```css
.firt {
    font-size: 80px;
    text-align: center;
}
```
- Define un tamaño de fuente grande y centra el texto.

### 7. Estilos de Disposición

```css
.one {
    margin: 0 auto;
    width: 80%;
    position: relative;
    display: flex;
    justify-content: space-around;
}
```
- Utiliza flexbox para distribuir elementos de manera uniforme dentro de este contenedor.

```css
.subDiv {
    width: 90%;
    margin: 0 auto;
}
```
- Establece un ancho del 90% y centra el contenedor.

```css
.two {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
```
- Centra el contenido y establece un margen superior.

### 8. Estilos del Botón

```css
#botoncito {
    width: 200px;
    height: 35px;
    border: none;
    color: white;
    background-color: black;
    border-radius: 15px;
    font-size: 18px;
}
```
- Define el estilo del botón: ancho, altura, sin borde, color de texto blanco, fondo negro, bordes redondeados y tamaño de fuente.

## Notas Adicionales

- Los estilos están diseñados para proporcionar una interfaz de usuario clara y accesible.
- Algunos estilos están comentados y pueden ser activados si es necesario.
