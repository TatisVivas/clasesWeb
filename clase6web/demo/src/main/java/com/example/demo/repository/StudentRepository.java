package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    //borrar porque no necesitamos escribir consultas
    //buscar un estudiante por nombre
    //select from student where nombre = ?
    Student findByNombre(String nombre);
    Student findBySemestre(String semestre);

    


}
