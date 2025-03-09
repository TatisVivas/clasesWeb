console.log("Funciones desde aquí");

//clasica
function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 5));

const multiplicar = function (a, b) {
    return a * b;
} //soluciona problemas de escopos
console.log(multiplicar(5, 5)); //soluciona problemas de escopos
//multiplicar = "hola"; //no se puede reasignar

//funciones como parametro de otra funcion
//boton.click(accionesArealizar);
function operar(a, b, operacion) {
    return operacion(a, b);
}
console.log(operar(5, 5, sumar));

//por buenas prácticas, funciones anónimas
let resultado = operar(5, 5, function (a, b) {
    return a - b;
}); // Added missing semicolon

const division= function (a, b) {
    return a / b;
}
const divisionArrow = (a, b) => a / b;
const elevadoAlCuadrado = a => a * a;
console.log(operar(5, 5, division)); // Corrected typo from 'con' to 'console'
const elevar = (numero, potencia=2) => {
    return numero ** potencia;
}
console.log(elevar(5));
console.log(elevar(5, 3));

resultado = operar(5, 1, (a,b) => a-b);
console.log(resultado);