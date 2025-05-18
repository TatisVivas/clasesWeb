import { Component } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent {

  mostrarForm: boolean = false;

  //atributos
  selectedStudent!: Student;

  //Base de datos falsa con varios estudiantes.
  studentList!: Student[];

  constructor(
    private studentService: StudentService
  ) {
  }

  ngOnInit(): void {
    //this.studentList = this.studentService.findAll();
    this.studentService.findAll().subscribe(
      data => this.studentList = data
    )
  }

  //metodos
  mostrarEstudiante(student: Student){
    this.selectedStudent = student;
  }

  //este metodo se llama cuando se emite un evento desde el hijo.
  agregarEstudiante(student: Student){
      //this.studentList.push(student);
      this.studentService.addStudent(student).subscribe(
        data => {
          this.studentList.push(data);
        }
      );
  }

  eliminarEstudiante(student: Student){
    var index = this.studentList.indexOf(student);
    this.studentList.splice(index, 1);
    this.studentService.deleteById(student.id);
    console.log(student.id)
  }

  mostrarFormulario(){
    this.mostrarForm = true;
  }

  ocultarFormulario(mostrar: boolean){
    this.mostrarForm = false;    
  }

}
