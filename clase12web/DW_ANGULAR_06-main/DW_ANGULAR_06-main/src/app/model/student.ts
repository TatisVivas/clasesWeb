//No se compila
//Define la estructura de una entidad, siempre publicos
//No puede tener constructor
//Se pierden otras ventajas de POO

import { homework } from "./homework";

//Los metodos siempre son abstractos
export interface Student{
    id:number;
    nombre:string;
    carrera:string;
    semestre:number;
    correo:string;
    tareas?: homework[];
}