let escribirFrase = document.getElementById("texto");
let boton = document.getElementById("btn");
boton.addEventListener("click", crearUsu)
function crearUsu(){
    const user = document.getElementById("usuario1").value;
    const apellido = document.getElementById("apellido").value;
    const mail = document.getElementById("mail").value;
    let enunciado = document.createElement("p");
    enunciado.innerHTML = `<p>Buenas ${user} ${apellido} tu mail es ${mail}</p>`
    escribirFrase.appendChild(enunciado);
}
