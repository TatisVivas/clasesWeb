//Imprimir en consola
console.log("Hello World");
console.error("Error");
console.warn("Warning");

//////////////
// Variables//
//////////////

//No son tipadas
//Son dinámicas
let variable = "hola mundo";
console.log(variable);
variable = 10;
console.log(variable);

const constantes = 20;
console.log(constantes);
//constantes = 30; //Error

const arreglo = [1, 2, 3, 4, 5];
arreglo[0] = 100;
console.log(arreglo); //si se puede

//var vs let
var variable2 = "hola mundo";
//var se puede redeclarar y respeta los scopes
//let no se puede redeclarar y respeta los scopes

//////////////////
// Condicionales//
//////////////////

let edad1 = 18;

if (edad1 >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//switch
let categoria = 'A';

switch (categoria) {    
    case 'A':
        console.log("Categoria A");
        break;
    case 'B':
        console.log("Categoria B");
        break;
    case 'C':
        console.log("Categoria C");
        break;
    default:
        console.log("Categoria desconocida");
        break;
}

////////////
// Ciclos//
///////////

/*
for (let i =0; i < 10; i++) {
    console.log(i);
}
let i=0;
while (i < 10) {
    console.log(i);
    i++;    
}
i=0;
do{
    console.log(i);
    i++;
} while (i < 10);
*/

////////////
// Strings//
////////////
let curso = "Curso de JavaScript";
let estudiante = "Tatiana Vivas";
//largo del string
console.log(curso.length);
//indice de un substring
console.log(curso.indexOf("JavaScript"));
//si existe un substring
console.log(curso.includes("JavaScript"));

let frase = curso + " para " + estudiante;
console.log(frase);
frase= curso.concat(" para ", estudiante);
console.log(frase);
console.log(curso, "para", estudiante);

//Temprate literales
console.log(`${curso} para ${estudiante}`);

//trim
let texto = "    Hola Mundo    ";
console.log(texto.trim());

//replace
let texto2 = "Hola Mundo";
console.log(texto2.replace("Mundo", "JavaScript"));

//mayusculas y minusculas
console.log(texto2.toUpperCase());
console.log(texto2.toLowerCase());
//letra en posicion
console.log(texto2.charAt(0));
//substring
console.log(texto2.substring(0, 5));
//split
let array = texto2.split(" ");
console.log(array);

////////////
// Numeros//
////////////

let numero =10;
let decimal = 10.5;
console.log(typeof numero);
console.log(typeof decimal);

//Libreria math
console.log(Math.round(decimal));
console.log(Math.floor(decimal));
console.log(Math.ceil(decimal));
console.log(Math.random());
console.log(Math.random() * 100);
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.sqrt(9));
console.log(Math.pow(2, 3));

//random entre 0 y 100
console.log(Math.floor(Math.random() * 100)+1);
console.log(Number.parseInt("10"));
console.log(Number.parseFloat("10.5"));
console.log(Number.isInteger(10));
console.log(Number.parseInt("abc"));

//Nan, Null, Undefined
//Nan: Not a Number
//Null: No tiene valor
//Undefined: Sin definir
console.log(NaN);
let indefinido;
console.log(indefinido);
indefinido = null;
console.log(indefinido);

//diferencia entre == y ===
console.log(10 == "10");
console.log(10 === "10");
console.log(null == undefined);
console.log(null === undefined);

/////////////
// Arreglos//
/////////////

let arreglo2 = [1, 2, 3, 4, 5];
console.log(arreglo2);
let arregloMixto = [1, "hola", true, null, undefined];
console.log(arregloMixto);

//matrices
const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(numeros);
console.log(numeros[0][0]);
console.table(numeros);
//agregar al final
const meses=["Enero", "Febrero", "Marzo"];
meses.push("Abril");
console.log(meses);
///al inicio
meses.unshift("Mes 0");
console.log(meses);
//eliminar del final
meses.pop();
console.log(meses);
//eliminar del inicio
meses.shift();
console.log(meses);
//eliminar por indice
let algunosMeses = meses.splice(1, 1);
console.log(algunosMeses);
console.log(meses);

//concat
let arreglo3 = arreglo.concat(arreglo2);
console.log(arreglo3);
//forma declarativa
let arreglo4 = [...arreglo, ...arreglo2];
console.log(arreglo4);


//for each
arreglo.forEach(function (elemento) {
    console.log(elemento);
});
//map
let arreglo5 = arreglo.map(function (elemento) {
    return elemento * 2;
}); //aplica transformacion a los elementos del arreglo
console.log(arreglo5);

//for of y for in
for (let elemento of arreglo) {
    console.log(elemento); //elemento
}
for (let i in arreglo) {
    console.log(i);// indice
}