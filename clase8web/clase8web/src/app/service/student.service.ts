import { Injectable } from '@angular/core';
import { Student } from '../student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }


    studentList: Student[] = [
      {
        id: 1,  
        name: 'Juan', 
        lastName: 'Perez',
        age: 20,
        email: 'IjMwI@example.com',
        phone: '123456789',
        ppa: 4.5,
        address: 'Calle 123',
        active: true,
        fechaPago: new Date()
      },
      {
        id: 2,
        name: 'Maria', 
        lastName: 'Gomez',
        age: 25,
        email: 'n4R1o@example.com',
        phone: '987654321',
        ppa: 3.0,
        address: 'Calle 456',
        active: false,
        fechaPago: new Date()
      },
      {
        id: 3,
        name: 'Pedro', 
        lastName: 'Lopez',
        age: 30,
        email: '5mTlU@example.com',
        phone: '555555555',
        ppa: 4.2,
        address: 'Calle 789',
        active: true,
        fechaPago: new Date()
      },
      {
        id: 4,
        name: 'Ana', 
        lastName: 'Garcia',
        age: 35,
        email: 'j5A0Q@example.com',
        phone: '111111111',
        ppa: 5,
        address: 'Calle 012',
        active: false,
        fechaPago: new Date()
      }
    ]

    findAll(): Student[]{
      return this.studentList;
    }
    findById(id: number): Student | undefined {
      return this.studentList.find(student => student.id === id);
    }
}
