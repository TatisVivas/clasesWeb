import { Component, Input } from '@angular/core';
import { Student } from '../student';
import { StudentCL } from 'src/app/model/student-cl';
import { StudentService } from 'src/app/service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {

  @Input()
  student !: Student;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router 
  ) {
    
  }

  //vive al renderizar el componente
  //muere al destruir el componente

  ngOnInit(): void {
    console.log("OnInit de detail");
    // Llamar Api o lo que sea
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        const student = this.studentService.findById(Number(id));
        if (student) {
          this.student = student;
        } else {
          console.error(`Student with ID ${id} not found`);
          this.router.navigate(['/not-found']); // Redirect to a "not found" page
        }
      } else {
        console.error("Invalid ID: null");
      }
    });
  }

  ngOnChanges(): void {
    console.log("OnChanges de detail");
  }
  //sobre todo para bdd
  ngOnDestroy(): void {
    console.log("OnDestroy de detail");
  }

  siguiente():void{
    let nextId = this.student.id + 1;
    this.router.navigate(['/student/detail', nextId]);  
  }
}
