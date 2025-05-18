import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient
  ) { }


  /*Agrega un profesor a la base de datos */
  addTeacher(teacher:Teacher): Observable<Teacher>{
    return this.http.post<Teacher>("http://localhost:8090/teacher/add", teacher);
  }

  /*Busca a un profesor a partir de su id */
  findById(id:number): Observable<Teacher>{
    const teacher = this.http.get<Teacher>("http://localhost:8090/teacher/find/" + id);
    return teacher;
  }

  login(usuario:Teacher):Observable<Teacher>{
    return this.http.post<Teacher>("http://localhost:8090/teacher/login",usuario);
  }
}
