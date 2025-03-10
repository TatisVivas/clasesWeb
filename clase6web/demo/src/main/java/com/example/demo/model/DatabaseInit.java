package com.example.demo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Controller;

import com.example.demo.repository.HomeworkRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.repository.TeacherRepository;

import jakarta.transaction.Transactional;

@Controller
@Transactional
public class DatabaseInit implements ApplicationRunner {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    HomeworkRepository homeworkRepository;

    @Autowired
    TeacherRepository teacherRepository;
    @Override
    public void run(ApplicationArguments args) throws Exception {
        studentRepository.save(new Student("Juan", "Ingenieria", "sY6dP@example.com", "5"));
        studentRepository.save(new Student("Pedro", "Ingenieria", "ffMw0@example.com", "6"));
        studentRepository.save(new Student("Maria", "Ingenieria", "asdf@example.com", "7"));
        studentRepository.save(new Student("Luis", "Ingenieria", "asdf@example.com", "8"));
     
        
        homeworkRepository.save(new Homework("Tarea 1", "Tarea de matematicas"));
        homeworkRepository.save(new Homework("Tarea 2", "Tarea de ingles"));
        homeworkRepository.save(new Homework("Tarea 3", "Tarea de historia"));
        homeworkRepository.save(new Homework("Tarea 4", "Tarea de ciencias"));

        teacherRepository.save(new Teacher("Juan"));
        teacherRepository.save(new Teacher("Andrea"));
        teacherRepository.save(new Teacher("Pedro"));

        //asociar todas las tareas al primer estudiante
        Student asociar = studentRepository.findById(1L).get();
        for (Homework h : homeworkRepository.findAll()) {
            h.setStudent(asociar);
            homeworkRepository.save(h);
        }
        asociar = studentRepository.findByNombre("Pedro");
        for (Homework h : homeworkRepository.findAll()) {
            h.setStudent(asociar);
            homeworkRepository.save(h);
        }
        Teacher profe= teacherRepository.findById(1L).get();
        for(Student s: studentRepository.findAll()) {
            s.getTeachers().add(profe);
        }
    }
}
