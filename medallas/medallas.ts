//Ejercicio4 dada una posicion en una carrera se determina que tipo de medalla se le entrega//
let dato1 = document.getElementById("dato1");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese su posicion en la carrera ";

/*Tenga en cuenta que para el primer puesto se entrega medalla de oro,
 segundo puesto medalla de plata y tercer puesto medalla de bronce. 
 En caso que quede en otra posición se entrega certificado de 
 participación*/

btnEnviar.addEventListener("click", () => {
  let numeroIngresado: number = Number(dato1.value);

  switch (numeroIngresado) {
    case 1:
      console.log("Feliitaciones! Gano medalla de ORO;");
      break;

    case 2:
      console.log("Feliitaciones! Gano medalla de PLATA;");
      break;
    case 3:
      console.log("Feliitaciones! Gano medalla de BRONCE;");
      break;
    default:
      console.log("Feliitaciones! Recibe certificado de participacion!;");
  }
});
