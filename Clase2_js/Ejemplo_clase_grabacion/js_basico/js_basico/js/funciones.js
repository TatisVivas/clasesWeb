console.log(sumar(1, 2));

// clasica
function sumar(a, b) {
  return a + b;
}

// Linea 1000

/*function sumar(a, b) {
  return a - b;
}*/

console.log(sumar(1, 2));

const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(1, 2));

// Funcion como parametro de otra funcion
function operar(a, b, operacion) {
  return operacion(a, b);
}

console.log(operar(1, 10, sumar));
console.log(operar(1, 2, multiplicar));

let resultado = operar(1, 2, function (a, b) {
  return a - b;
});
console.log(resultado);

// arrow function
const division = function (a, b) {
  return a / b;
};

const divisionArrow = (a, b) => {
  return a / b;
};

console.log(division(1, 2));
console.log(divisionArrow(1, 2));

const elevarCuadrado = (numero) => {
  return numero * numero;
};

console.log(elevarCuadrado(2));

const elevar = (numero, exponente = 2) => {
  return numero ** exponente;
};

console.log(elevar(2));
console.log(elevar(2, 3));

resultado = operar(1, 2, (a, b) => a - b);
console.log(resultado);
