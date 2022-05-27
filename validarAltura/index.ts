//Ejercicio 5 de acuerdo a la altura de la persona decide si puede o no entrar a un juego//
let btnEnviar = document.getElementById("enviar");
let dato = document.getElementById("dato");

rotulo.innerHTML = "Indique la altura de la persona:";

btnEnviar.addEventListener("click", () => {
  let alturaPermitida: number = 1.3;
  let alturaPersona: number = dato.value;
  if (alturaPersona <= alturaPermitida) {
    console.log("La persona no puede subir al juego");
  } else {
    console.log("La persona puede subir al juego");
  }
});
