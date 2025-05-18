import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { HomeworkService } from 'src/app/services/homework.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {

  @Input()
  student!:Student;

  //Inyectar dependencias
  constructor(
    private studentService: StudentService,
    private homeworkService: HomeworkService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  //Se llama una única vez cuando el componente se renderiza en pantalla
  ngOnInit(): void {
    /*
    console.log("ngOnInit de detail");
    //LLamar un API
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.studentService.findById(id).pipe(
        mergeMap(
          (data) => {
            this.student = data;
            return this.homeworkService.findStudentHomework(this.student.id);
          }
        )).subscribe(
          (data) => {
            this.student.tareas = data
          }
        )
    })
    */
    this.studentService.studentHome().subscribe(
      (data) => {
        this.student = data
      }
    )
  }

  //Dado que el componente tiene una propiedad input se llama despues del constructor
  ngOnChanges(): void {
    console.log("ngOnChanges de detail");
  }

  siguiente(){
    let nextID = this.student.id + 1;
    this.router.navigate(['/student/detail', nextID]);
  }
}
