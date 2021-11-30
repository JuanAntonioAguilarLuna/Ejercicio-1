
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18) {
         if (time >= 2 && time < 7 && free == false) {
             alert("puedes pasar gratis, eres la primer persona en llegar a las 2");
             free = true;
         } else {
             alert(`son las ${time}:00 hs y puedes pasar, pero pagarias cover`);
         }
    } else {
        alert("al ser menor de edad no pedes ingresar ");
    }
}

validarCliente(20);
validarCliente(24);
validarCliente(2.4);