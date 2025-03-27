//Interfaz
//No se ocmpila
//Define estructura de una entidad, siempre públicas
//Se pieren otras ventajas de POO
//Los métodos siempre son abstractos
export interface Student {
    id: number;
    name: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    ppa: number;
    //no obligatorio
    address?: string;
    active: boolean;
    fechaPago: Date;
}