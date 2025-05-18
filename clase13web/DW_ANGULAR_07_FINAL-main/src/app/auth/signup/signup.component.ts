import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  //modelo
  formStudent: Student = {
    id: 0,
    nombre: '',
    carrera: '',
    semestre: 0,
    correo: '',
    tareas: [],
  };

  constructor(private studentService: StudentService,
    private router: Router) {}

  addStudent(form: any) {
      this.studentService.addStudent(this.formStudent).subscribe(
        
    (data) => {
        this.router.navigate(['/student/detail', data.id]);
      }
    );
  }
}
