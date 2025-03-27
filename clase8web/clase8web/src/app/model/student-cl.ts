export class StudentCL {
    public name: string;
    public lastName: string;
    public age: number;
    public email: string;
    public phone: string;
    public ppa: number;
    //no obligatorio
    public address?: string;
    public active: boolean;
    public fechaPago: Date;
    constructor(name: string, lastName: string, age: number, email: string, phone: string, ppa: number, address: string, active: boolean, fechaPago: Date) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.ppa = ppa;
        this.address = address;
        this.active = active;
        this.fechaPago = fechaPago;
    }

}

