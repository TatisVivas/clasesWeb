package com.example.demo.model;

import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Controller;

import com.example.demo.repository.CourseRepository;
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

    @Autowired
    CourseRepository courseRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        studentRepository.save(new Student("Juan", "Ingenieria", "sY6dP@example.com", "5"));
        studentRepository.save(new Student("Pedro", "Ingenieria", "ffMw0@example.com", "6"));
        studentRepository.save(new Student("Maria", "Ingenieria", "asdf@example.com", "7"));
        studentRepository.save(new Student("Luis", "Ingenieria", "asdf@example.com", "8"));

        homeworkRepository.save(new Homework("Tarea 1", "Hacer la tarea 1"));
        homeworkRepository.save(new Homework("Tarea 2", "Hacer la tarea 2"));
        homeworkRepository.save(new Homework("Tarea 3", "Hacer la tarea 3"));
        homeworkRepository.save(new Homework("Tarea 4", "Hacer la tarea 4"));

        teacherRepository.save(new Teacher("Profesor 1"));
        teacherRepository.save(new Teacher("Profesor 2"));
        teacherRepository.save(new Teacher("Profesor 3"));

        // asociar todas las tareas al estudiante 1
        Student asociar = studentRepository.findById(1L).get();
        for (Homework hw : homeworkRepository.findAll()) {
            hw.setStudent(asociar);
            homeworkRepository.save(hw);
        }

        int CANTIDAD_TAREAS = 4;
        int CANTIDAD_TAREAS_ASIGNAR = 2;
        for (Student student : studentRepository.findAll()) {
            for (int i = 0; i < CANTIDAD_TAREAS_ASIGNAR; i++) {
                int random = ThreadLocalRandom.current().nextInt(1, CANTIDAD_TAREAS + 1);
                Homework hw = homeworkRepository.findById((long) random).get();
                hw.setStudent(student);
                homeworkRepository.save(hw);

            }

        }

        courseRepository.save(new Course("Curso 1"));
        courseRepository.save(new Course("Curso 2"));
        courseRepository.save(new Course("Curso 3"));
        courseRepository.save(new Course("Curso 4"));
        courseRepository.save(new Course("Curso 5"));
        courseRepository.save(new Course("Curso 6"));
        courseRepository.save(new Course("Curso 7"));
        courseRepository.save(new Course("Curso 8"));

        int CANTIDAD_PROFESORES = 3;
        int CANTIDAD_ESTUDIANTES = 4;

        for (Course course : courseRepository.findAll()) {
            int id_profesor = ThreadLocalRandom.current().nextInt(1, CANTIDAD_PROFESORES + 1);
            int id_estudiante = ThreadLocalRandom.current().nextInt(1, CANTIDAD_ESTUDIANTES + 1);

            Student student = studentRepository.findById((long) id_estudiante).get();
            Teacher teacher = teacherRepository.findById((long) id_profesor).get();

            course.setTeacher(teacher);
            course.setStudent(student);

        }

    }

}
