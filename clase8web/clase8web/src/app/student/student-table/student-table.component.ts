import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  selectedStudent!: Student;

  studentList!: Student[] 
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentList = this.studentService.findAll();
  }
   //métodos
  mostrarEstudiante(student: Student){
    this.selectedStudent = student;
  }
  deleteStudent(student: Student){
    let index = this.studentList.indexOf(student);
    if (index !== -1) {
      this.studentList.splice(index, 1);
    }
  }
  addStudent(student: Student){
    this.studentList.push(student);
  }
  mostrarForm: boolean = false;

  ocultarForm(mostrar: boolean){
    this.mostrarForm = false;
  }

  mostrarFormulario(): void {
    this.mostrarForm = true;
  }

}
