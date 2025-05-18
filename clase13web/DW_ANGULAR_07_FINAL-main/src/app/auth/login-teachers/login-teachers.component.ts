import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/model/teacher';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-login-teachers',
  templateUrl: './login-teachers.component.html',
  styleUrls: ['./login-teachers.component.css']
})
export class LoginTeachersComponent {

  constructor(private teacherService: TeacherService,
    private router: Router) {}
  
    //modelo
    formUser: Teacher = {
      correo: '',
      password: '',
      id: 0,
      name: ''
    };

  login(form: any) {
    this.teacherService.login(this.formUser).subscribe(
      (data) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error.error);
        console.log(error.status);
      }
    )
  }
}
