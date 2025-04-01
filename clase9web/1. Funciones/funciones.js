console.log("hola")

function suma(a, b) {
    return a + b;
}
console.log(suma(2, 3))
//problema: Redefinición de la función suma
/*function suma(a, b) {
    return a + b+1;
}
console.log(suma(2, 3))
*/
let restar = function (a, b) {
    return a - b;
}
console.log(restar(2, 3))

const multiplicar = (a,b) => {
    return a * b;
}
console.log("multiplicar",multiplicar(2, 3))

const dividir = (a,b) => a / b;
console.log("dividir", dividir(2, 3))

const cubo = a => a * a * a;
console.log("cubo", cubo(3))

const imprimir = () => console.log("hola");
imprimir()

const operacion2 = (operacion1, operacion2, a, b) => {
    let resultado1= operacion1(a,b);
    let final = operacion2(resultado1, b);
    return final;
}
console.log(operacion2(suma, multiplicar, 2, 3))

const operacion3 = (a,b,funcion) => {
    return funcion(a,b)
}
console.log(operacion3(2,3, (a,b)=> a**b))