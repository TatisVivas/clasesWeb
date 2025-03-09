console.log("OOP desde aquí");

///////////
//Objetos//
///////////

//1. Objeto literal
let persona = {
    nombre: "Ricardo",
    apellido: "Torres",
    edad: 30,
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona["edad"]);
//agregar y eliminar propiedades
persona.correo = "z5E0l@example.com";
console.log(persona);
delete persona.correo;
console.log(persona);
console.log(`El nombre de la persona es: ${persona.nombre} ${persona.apellido}`);

//Destructuring
const { nombre, apellido, edad } = persona;
console.log(`El nombre de la persona es: ${nombre} ${apellido}`);

//objetos anidados
const persona2 = {
    nombre: "Ricardo",
    apellido: "Torres",
    edad: 30,
    direccion: {
        calle: "Avenida 123",
        ciudad: "Bogotá",
        pais: "Colombia",
    },
};
console.log(persona2);
console.log(persona2.direccion);
console.log(persona2.direccion.ciudad);
persona2.direccion.zipcode = 1111;
//persona=persona2; //no se puede reasignar

//metodos o funciones

const alumno = {
    nombre: "Ricardo",
    apellido: "Torres",
    saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
    }
};

alumno.saludar();

//constructor
function Alumno(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.saludar = function () {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
    }
}

const alumno2 = new Alumno("Ricardo", "Torres");
console.log(alumno2);
alumno2.saludar();

console.log(Object.keys(alumno2));//para ver las propiedades
console.log(Object.values(alumno2));//para ver los valores
console.log(Object.entries(alumno2));//para ver las propiedades y valores


//////////////////
//Array meethods//
//////////////////

const estudiantes = [
    { nombre: "Ricardo", apellido: "Torres", edad: 30 },
    { nombre: "Damian", apellido: "Torres", edad: 20 },
    { nombre: "sami", apellido: "Torres", edad: 40 },
]
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
let encontrado = meses.includes("Enero");
console.log(encontrado);
encontrado = estudiantes.some(function (estudiante) {
    return estudiante.nombre === "Ricardo";
});
console.log(encontrado);

encontrado = meses.indexOf("Enero");
console.log(encontrado);

encontrado = estudiantes.findIndex((estudiante) => estudiante.nombre === "Ricardo");
console.log(encontrado);

const total = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0);
console.log(total);

const mayores = estudiantes.filter((estudiante) => estudiante.edad > 29);
console.log(mayores);

let resultado2 = estudiantes.filter((estudiante) => estudiante.nombre !== "Ricardo");
console.log(resultado2);

resultado2 = estudiantes.find((estudiante) => estudiante.edad > 30);
console.log(resultado2);

//////////////
//Prototipos//
//////////////

function Perro(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.saludar = function () {
        console.log(`Hola mi nombre es ${this.nombre} ${this.raza}`);
    };
}

const perro1 = new Perro("Firulay", "Pitbull", 5);
console.log(perro1);
perro1.saludar();

//no era la forma apropiada

function Gato(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;    
    this.edad = edad;
}
Gato.prototype.saludar = function () {
    console.log(`Hola mi nombre es ${this.nombre} ${this.raza}`);
};
const gato1 = new Gato("Firulay", "Pitbull", 5);
console.log(gato1);
gato1.saludar();

//Se debe hacer con prototipos porque son dinámicos y no se pueden reasignar
//herencia

function Gatito(nombre, raza, edad, color) {
    Gato.call(this, nombre, raza, edad);
    this.color = color;
}


Gatito.prototype = Object.create(Gato.prototype);
Gatito.prototype.constructor = Gatito;
const gatito1 = new Gatito("Firulay", "Pitbull", 5, "negro");
console.log(gato1);
const gatito2 = new Gatito("Firulay", "Pitbull", 5, "negro");
console.log(gatito2);
gatito1.saludar();


///////////
//Clases//
//////////
class Empleado {
    constructor(nombre, apellido, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
    }
    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
    }
    static bienvenida() {
        console.log("Bienvenido a la empresa");
    }
}

const empleado1 = new Empleado("Ricardo", "Torres", 1000);
console.log(empleado1);
empleado1.saludar();
Empleado.bienvenida();

class Desarrollador extends Empleado {
    constructor(nombre, apellido, salario, tecnologia) {
        super(nombre, apellido, salario);
        this.tecnologia = tecnologia;
    }
    static bienvenida() {
        console.log("Bienvenido a la empresa");
    }
}
const desarrollador1 = new Desarrollador("Ricardo", "Torres", 1000, "JavaScript");
console.log(desarrollador1);
desarrollador1.saludar();
Desarrollador.bienvenida();

//Encapsulamiento
class Trabajador{
    #nombre; //private
    #apellido;
    #salario;
    constructor(nombre, apellido, salario){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#salario = salario;
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.#nombre} ${this.#apellido}`);
    }
    get salario(){
        return this.#salario;
    }    
    set salario(salario){
        this.#salario = salario;
    }
}
const Trabajador1 = new Trabajador("Ricardo", "Torres", 1000);
console.log(Trabajador1);
Trabajador1.saludar();
console.log(Trabajador1.salario); 