import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { HomeworkService } from './homework.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8090/student/all');
  }

  findById(id:number): Observable<Student>{
    const student = this.http.get<Student>("http://localhost:8090/student/find/" + id);
    return student;
  }

  deleteById(id:number){
    console.log("ID:" + id)
    this.http.delete("http://localhost:8090/student/delete/" + id).subscribe();
  }

  addStudent(student:Student): Observable<Student>{
    return this.http.post<Student>("http://localhost:8090/student/add", student);
  }
}
