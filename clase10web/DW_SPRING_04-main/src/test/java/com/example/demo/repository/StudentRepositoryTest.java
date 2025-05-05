package com.example.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.example.demo.model.Course;
import com.example.demo.model.Student;
import com.example.demo.model.Teacher;

import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

@DataJpaTest
@ExtendWith(SpringExtension.class)
public class StudentRepositoryTest {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private CourseRepository courseRepository;

    //se ejecutará siempre antes que cada prueba
    @BeforeEach
    public void setUp() {
        studentRepository.save(new Student("John", "Doe", 20, "Computer Science"));
        studentRepository.save(new Student("Jane", "Doe", 22, "Mathematics"));
        studentRepository.save(new Student("Jim", "Beam", 21, "Physics"));
        studentRepository.save(new Student("Jack", "Daniels", 23, "Chemistry"));

        teacherRepository.save(new Teacher("Dr. Smith"));
        teacherRepository.save(new Teacher("Prof. Johnson"));
        teacherRepository.save(new Teacher("Dr. Brown"));

        //asociar estudiante y profesor
        Student student = studentRepository.findById(1L).get();
        Teacher teacher = teacherRepository.findById(1L).get();

        //Asociar estudiante. curso y profesor
        Course course = new Course("Mathematics");
        courseRepository.save(course);

        course.setStudent(student);
        course.setTeacher(teacher);
        course = courseRepository.save(new Course("Physics"));
        course.setStudent(studentRepository.findById(2L).get());
        course.setTeacher(teacher);

    }

    @Test
    public void studentRepository_save_Student() {
        //Arrenge
        //Act
        //Assert
        Student student = new Student("John", "Doe", 20, "Computer Science");
        Student savedStudent = studentRepository.save(student);
        Assertions.assertThat(savedStudent).isNotNull();
        // Test logic for student repository
    }
    //traer todos los estudiantes (test)
    @Test
    public void StudentRepository_findAll_NotEmptyList() {
        //Arrenge
        //Act
        //Assert
        Student student = new Student("John", "Doe", 20, "Computer Science");
        Student student2 = new Student("Jane", "Doe", 22, "Mathematics");
        studentRepository.save(student);
        studentRepository.save(student2);
        List<Student> students = studentRepository.findAll();
        Assertions.assertThat(students).isNotNull();
        Assertions.assertThat(students.size()).isEqualTo(6);
        Assertions.assertThat(students.size()).isGreaterThan(0);
    }

    //esperar que el test pase sin embargo que pcurra algo que no deba pasar
    @Test
    public void StudentRepository_findByIt_FindWrongIndex() {
        //arrenge
        Long index= -1L;
        //act
        Optional<Student> student = studentRepository.findById(index);
        //assert
        Assertions.assertThat(student).isEmpty();

        
    }

    @Test
    //delete by id an empty student
    public void StudentRepository_deleteById_EmptyStudent() {
        //arrenge
        Long index= 2L;
        //act
        studentRepository.deleteById(index);
        //assert
        Assertions.assertThat(studentRepository.findById(index)).isEmpty();
    }

    //probando queries personalizadas
    @Test
    public void StudentRepository_findByName_Student() {
        //arrenge
        String name = "John";
        //act
        Student students = studentRepository.findByNombre(name);
        //assert
        Assertions.assertThat(students).isNotNull();
    }
    //update
    @Test
    public void StudentRepository_updateByName_Student() {
        //arrenge
        String name = "John";
        String newName = "Anna";
        //act
        Student student = studentRepository.findByNombre(name);
        student.setNombre(newName);
        studentRepository.save(student);
        //assert
        Assertions.assertThat(studentRepository.findByNombre(newName)).isNotNull();
        Assertions.assertThat(studentRepository.findByNombre(newName).getNombre()).isEqualTo("Anna");
    }

    @Test
    //verificar una query bien hecha
    public void StudentRepository_findStudentsFromTeacher_Student_List() {
        //arrenge
        String teacherID = "1";
        //act
        List<Student> students = studentRepository.findStudentsFromTeacher(teacherID);
        //assert
        Assertions.assertThat(students).isNotNull();
        Assertions.assertThat(students.size()).isEqualTo(2);
        Assertions.assertThat(students.size()).isGreaterThan(0);
    }
}