export class StudentCL {

    public name:string
    public lastName:string
    public age:number
    public email:string
    public phone:string
    public ppa:number
    //Este atributo no es obligatorio
    public address?:string
    public activated:boolean
    public fechaPago:Date

  constructor(
    name: string, 
    lastName: string, 
    age: number, 
    email: string, 
    phone: string, 
    ppa: number, 
    address: string, 
    activated: boolean, 
    fechaPago: Date
) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.email = email
    this.phone = phone
    this.ppa = ppa
    this.address = address
    this.activated = activated
    this.fechaPago = fechaPago
  }
	
    

}
