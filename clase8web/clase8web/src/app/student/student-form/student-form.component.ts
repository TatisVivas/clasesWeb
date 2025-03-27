import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {


  @Output()
  addStudentEvent: EventEmitter<Student> = new EventEmitter<Student>();

  @Output()
  ocultarFormEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  sendStudent!: Student;
  //modelo
  formStudent: Student={
    id: 0,
    name: '',
    lastName: '',
    age: 0,
    email: '',
    phone: '',
    ppa: 0,
    active: false,
    fechaPago: new Date(),
  };
  //agregar un estudiante a partir del formulario
  addStudentForm(){
    console.log(this.formStudent);
    this.sendStudent= Object.assign({}, this.formStudent);
    this.addStudentEvent.emit(this.sendStudent);

  }
  addStudent(form : any){
    console.log(this.formStudent);
    this.sendStudent= Object.assign({}, this.formStudent);
    this.addStudentEvent.emit(this.sendStudent);

  }

  ocultarForm(){
    this.ocultarFormEvent.emit(false);
  }
}
