package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Student;
import com.example.demo.model.Teacher;

@Repository

public interface StudentRepository extends JpaRepository<Student, Long> {

    // select * from student where name = "nombre"
    Student findByNombre(String nombre);

    @Query("select s from Student s where s.id < 4")
    List<Student> findFirst3Students();

    @Query("select s from Student s where s.id < ?1")
    List<Student> findFirstNStudents(int cantidad);

    @Query("select s from Course c inner join c.student s where c.teacher.id = ?1")
    List<Student> findStudentsFromTeacher(int teacherID);

    @Query("select s from Homework h join h.student s where h.name LIKE %?1")
    List<Student> findStudentsbyTypeOfHomework(String type);

}
