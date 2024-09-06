var botonCambiar = document.getElementById("botonCambiar");
botonCambiar.addEventListener("click", function() {
    this.innerText = "Cerrar sesión";
});

var botonDefinicion = document.getElementById("agregarDefinicion");
botonDefinicion.addEventListener("click", function() {
    this.remove();
});

var botonGatoAtigrado = document.getElementById("botonGatoAtigrado");
var megusta1 = document.getElementById("megusta1");
botonGatoAtigrado.addEventListener("click", function() {
    let megustas = parseInt(megusta1.innerText);
    megustas++;
    megusta1.innerText = megustas;
    alert("Gato Atigrado was liked");
});
