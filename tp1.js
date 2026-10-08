/**
 * Limpia la patente quitando espacios y pasando a mayúsculas.
 */
function limpiarPatente(texto) {
    return texto.trim().toUpperCase();
}
/**
 * Valida que la patente tenga entre 6 y 7 caracteres.
 */
function validarPatente(patente){
    return patente.length >= 6 && patente.length <= 7;
}
/**
 * Pide la velocidad y asegura que sea un número válido y no negativo.
 */
function pedirVelocidad() {
    let velocidad = Number(prompt("Ingrese la velocidad:"));

    while (isNaN(velocidad) || velocidad < 0) {
        velocidad = Number(prompt("Velocidad inválida. Ingrese una velocidad mayor o igual a 0:"));
    }
    return velocidad;
}
/**
 * Retorna el monto según el límite de 110 km/h y el exceso cometido.
 */
function calcularMulta(velocidad){
    if (velocidad <= 110) {
        return 0;
    } else if (velocidad <= 130) {
        return 5000;
    } else {
        return 10000;
    }
}
// 1. Pedir y validar la patente mediante bucle
let patente = limpiarPatente(prompt("Ingrese la patente:"));

while (!validarPatente(patente)){
    patente = limpiarPatente(prompt("Patente inválida. Ingrese nuevamente:"));
}
// 2. Pedir velocidad válida
let velocidad = pedirVelocidad();
// 3. Calcular multa
let multa = calcularMulta(velocidad);
// 4. Salida del reporte por consola
console.log(`Reporte: Vehículo ${patente} iba a ${velocidad} km/h. Multa: $${multa}`);
