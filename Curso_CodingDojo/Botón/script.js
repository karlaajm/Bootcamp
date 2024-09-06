/*
// Obtenemos el botón por su id
var botonCambiar = document.getElementById("botonCambiar");

// Agregamos un evento 'click' al botón
botonCambiar.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "¡Texto cambiado!";
});
*/

// Obtenemos todas las imágenes con la clase 'imagenEliminar'
var imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function(imagen) {
    imagen.addEventListener("click", function() {
        // Eliminamos la imagen haciendo referencia a 'this'
        this.remove();
    });
});