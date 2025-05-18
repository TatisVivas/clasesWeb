import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { User } from 'src/app/model/user';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private studentService: StudentService,
    private router: Router) {}

    //modelo
    formUser: User = {
      correo: '',
      password: ''
    };

    login(form: any) {
      this.studentService.login(this.formUser).subscribe(
        (data) => {
          localStorage.setItem('token', String(data));
          this.router.navigate(['/student/home']);
        }
      )
    }

}
