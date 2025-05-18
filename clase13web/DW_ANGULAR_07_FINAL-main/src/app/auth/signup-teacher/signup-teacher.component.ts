import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrls: ['./signup-teacher.component.css']
})
export class SignupTeacherComponent {


  //modelo
  formTeacher: Teacher = {
    id: 0,
    name: '',
    correo: '',
    password: '',
  };

  constructor(private teacherService: TeacherService,
    private router: Router) {}

    addTeacher(form: any) {
      
        console.log(this.formTeacher);
        this.teacherService.addTeacher(this.formTeacher).subscribe(
          (data) => {
            this.router.navigate(['/home']);
          }
        );
    }

}
