import { Injectable } from '@angular/core';
import { homework } from '../model/homework';
import { StudentService } from './student.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  constructor(
    private http: HttpClient
  ) { }



  findById(id:number):Observable<homework>{
    return this.http.get<homework>("http://localhost:8090/homework/find/" + id);
  }

  findStudentHomework(id:number):Observable<homework[]>{
    return this.http.get<homework[]>("http://localhost:8090/homework/student/" + id);
  }
}
