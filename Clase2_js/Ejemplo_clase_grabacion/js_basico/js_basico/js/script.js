// Imprimir en consola //
console.log("Hello World");
console.error("Error");
console.warn("Warning");

/////////////////////////
/////// Variables ///////
/////////////////////////

// no son tipadas
// son dinamicas
let variable = "hola mundo";
console.log(variable);
variable = 10;
console.log(variable);

const constantes = 20;
console.log(constantes);
//constantes = 30;
const arreglo = [1, 2, 3];
arreglo[0] = 10;
console.log(arreglo);

// var vs let
var variable2 = "hola mundo";
console.log(variable2);
variable2 = 20;
console.log(variable2);

let variable3 = "hola mundo";
console.log(variable3);
variable3 = 20;
console.log(variable3);

/////////////////////////
///// Condicionales /////
/////////////////////////
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

//switch
let categoria = "A";
switch (categoria) {
  case "A":
    console.log("Categoria A");
    break;
  case "B":
    console.log("Categoria B");
    break;
  case "C":
    console.log("Categoria C");
    break;
  default:
    console.log("Categoria no válida");
    break;
}

/////////////////////////
//////// Ciclos ////////
/////////////////////////
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
 */

/////////////////////////
/////// Strings ////////
/////////////////////////

let curso = "Curso de JavaScript";
let profesor = "Juan Angarita";

// Largo del string
console.log(curso.length);

// Indice de un substring
console.log(curso.indexOf("JavaScript"));

// Si existe una subcadena
console.log(curso.includes("JavaScript"));

let frase = curso + " de " + profesor;
console.log(frase);
frase = curso.concat(" de ", profesor);
console.log(frase);
console.log(curso, "de", profesor);

// Template literals
console.log(`El curso ${curso} de ${profesor}`);

// Trim
let stringConEspacios = "   Hola    mundo   ";
console.log(stringConEspacios);
console.log(stringConEspacios.trim());

// Remplazar
console.log(frase.replace("JavaScript", "HTML"));

// Mayusculas y minusculas
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

// letra en una posicion
console.log(frase.charAt(3));

// Substring
console.log(frase.substring(0, 5));

// Split
let array = frase.split(" ");
console.log(array);

/////////////////////////
//////// NUMEROS ////////
/////////////////////////
let numero = 10;
let decimal = 10.5;
console.log(typeof numero);
console.log(typeof decimal);

// Libreria Math
console.log(Math.round(10.4));
console.log(Math.ceil(10.1));
console.log(Math.floor(10.9));
console.log(Math.random());
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));

console.log(Math.floor(Math.random() * 100) + 1);

console.log(Number.parseInt("10"));
console.log(Number.parseFloat("10.5"));
console.log(Number.isInteger(10.5));
console.log(Number.parseInt("abc"));

// NaN, null y undefined
console.log(Number.parseInt("abc"));
let indefinido;
console.log(indefinido);
indefinido = null;
console.log(indefinido);

// la diferencia entre == y ===
console.log(10 == "10");
console.log(10 === "10");
console.log(null == undefined);

console.log(null === undefined);

/////////////////////////
/////// Arreglos ///////
/////////////////////////
let arreglo2 = [1, 2, 3];
console.log(arreglo2);
let arregloMixto = [1, "hola", true];
console.log(arregloMixto);

// Matrices
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(numeros);
console.log(numeros[0][1]);
console.table(numeros);

// Agregar algo al final
const meses = ["Enero", "Febrero", "Marzo"];
meses.push("Abril");
console.log(meses);

// Agregar algo al inicio
meses.unshift("Mayo");
console.log(meses);

// Eliminar algo al final
meses.pop();
console.log(meses);

// Eliminar algo al inicio
meses.shift();
console.log(meses);

// Splice
let algunosMeses = meses.splice(1, 2);
console.log(algunosMeses);
console.log(meses);

// cocnar
let pares = [2, 4, 6];
let impares = [1, 3, 5];
let todos = pares.concat(impares);
console.log(todos);

// forma declarativa
let todos2 = [...pares, "ultimo"];
console.log(todos2);

// for each
todos.forEach(function (elemento) {
  console.log(elemento);
});

// map
let arreglo3 = todos.map(function (elemento) {
  return elemento * 2;
});

console.log(arreglo3);

// for of y for in
for (let elemento of todos) {
  console.log(elemento);
}

for (let elemento in todos) {
  console.log(elemento);
}
