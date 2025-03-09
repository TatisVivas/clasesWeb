/////////////////////////
//////// OBJETOS ////////
/////////////////////////

// 1. Object literals
const estudiante = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
};

console.log(estudiante);
console.log(estudiante.edad);
console.log(estudiante["edad"]);

// Permitir agregar y eliminar propiedades
estudiante.carrera = "Informatica";
console.log(estudiante);
delete estudiante.carrera;
console.log(estudiante);

console.log(
  `El estudiante tiene el nombre de ${estudiante.nombre} y tiene ${estudiante.edad} años`
);

// Destructuring
const { nombre, edad } = estudiante;
console.log(`El estudiante tiene el nombre de ${nombre} y tiene ${edad} años`);

// Objetos anidados
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  direccion: {
    calle: "Calle 1",
    ciudad: "Ciudad 1",
  },
  perro: {
    nombre: "Fido",
    raza: "Labrador",
  },
};

console.log(persona.perro.raza);

persona.edad = 40;
console.log(persona);

// metodos o funciones
const alumno = {
  nombre: "Juan",
  apellido: "Perez",
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
  },
};

alumno.saludar();

function Estudiante(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
  };
}

const estudiante1 = new Estudiante("Juan", "Perez", 25);
console.log(estudiante1);
estudiante1.saludar();

console.log(Object.keys(estudiante1));
console.log(Object.values(estudiante1));
console.log(Object.entries(estudiante1));

/////////////////////////
///// Array methods /////
/////////////////////////

const estudiantes = [
  { nombre: "Juan", apellido: "Perez", edad: 25 },
  { nombre: "Maria", apellido: "Gomez", edad: 30 },
  { nombre: "Pedro", apellido: "Garcia", edad: 35 },
];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

let encontrado = meses.includes("Marzo");
console.log(encontrado);

encontrado = estudiantes.some((estudiante) => estudiante.edad > 30);
console.log(encontrado);

encontrado = estudiantes.some(function (estudiante) {
  return estudiante.edad > 30;
});

console.log(encontrado);

encontrado = meses.indexOf("Marzo");
console.log(encontrado);

encontrado = estudiantes.findIndex((estudiante) => estudiante.edad > 30);
console.log(encontrado);

const total = estudiantes.reduce((acumulador, estudiante) => {
  return acumulador + estudiante.edad;
}, 0);

console.log(total);

const mayores = estudiantes.filter((estudiante) => estudiante.edad > 29);
console.log(mayores);

let resultado = estudiantes.filter(
  (estudiante) => estudiante.nombre !== "Juan"
);
console.log(resultado);

resultado = estudiantes.find((estudiante) => estudiante.edad > 30);
console.log(resultado);

/////////////////////////
////// PROTOTIPOS ///////
/////////////////////////

function Perro(nombre, raza, edad) {
  this.nombre = nombre;
  this.raza = raza;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  };
}

const perro1 = new Perro("Fido", "Labrador", 5);
console.log(perro1);
perro1.saludar();
const perro2 = new Perro("Luna", "Golden Retriever", 3);
console.log(perro2);

function Gato(nombre, raza, edad) {
  this.nombre = nombre;
  this.raza = raza;
  this.edad = edad;
}

Gato.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre}`);
};

const gato1 = new Gato("Miau", "Persa", 3);
console.log(gato1);
gato1.saludar();

function Gatito(nombre, raza, edad, color) {
  Gato.call(this, nombre, raza, edad);
  this.color = color;
}

const gatito1 = new Gatito("Miau", "Persa", 3, "Negro");
console.log(gatito1);

Gatito.prototype = Object.create(Gato.prototype);

const gatito2 = new Gatito("Miau", "Persa", 3, "Negro");
console.log(gatito2);

/////////////////////////
//////// CLASES /////////
/////////////////////////

class Empleado {
  constructor(nombre, apellido, salario) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
  }

  static bievenido() {
    console.log("Bienvenido al curso de JavaScript");
  }
}

const empleado = new Empleado("Juan", "Perez", 5000);
console.log(empleado);
empleado.saludar();
Empleado.bievenido();

class Desarrollador extends Empleado {
  constructor(nombre, apellido, salario, lenguaje) {
    super(nombre, apellido, salario);
    this.lenguaje = lenguaje;
  }

  static bievenido() {
    console.log("Bienvenido al curso de JavaScript");
  }
}

const desarrollador = new Desarrollador("Juan", "Perez", 5000, "JavaScript");
console.log(desarrollador);
desarrollador.saludar();
Desarrollador.bievenido();

// Encapsulamiento
class Trabajador {
  #nombre;
  #apellido;
  #salario;

  constructor(nombre, apellido, salario) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#salario = salario;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.#nombre} ${this.#apellido}`);
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
}

const trabajador = new Trabajador("Juan", "Perez", 5000);
console.log(trabajador);
trabajador.saludar();

//console.log(trabajador.#salario);

trabajador.nombre = "Pedro";
console.log(trabajador);
console.log(trabajador.nombre);
