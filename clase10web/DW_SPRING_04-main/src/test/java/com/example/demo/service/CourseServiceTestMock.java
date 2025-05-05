package com.example.demo.service;

import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.example.demo.model.Course;
import com.example.demo.model.Student;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.CourseServiceImpl;

//Un mock simula un objeto y su respuesta a las peticiones, no pruebo el repositorio, solo el service
@ActiveProfiles("test")
@ExtendWith(SpringExtension.class)
public class CourseServiceTestMock  {

    @Mock
    private StudentRepository studentRepository;

    @InjectMocks
    private CourseServiceImpl courseServiceImpl; // Use the implementation class
    @Mock //objeto falso para acciones falsas
    CourseRepository courseRepository;
    @BeforeEach
    public void init() {

    }



    @Test
    public void CourseService_createCourse_Course() {
        //arange
        Course course = new Course("Mathematics");

        when(courseRepository.save(course)).thenReturn(course);

        //act
        Course newCourse = courseServiceImpl.createCourse(course);

        //assert
        Assertions.assertThat(newCourse).isNotNull();

    }
    @Test 
    public void CourseService_findAll_CourseList() {
        //arange
        //act
        List<Course> courses = courseServiceImpl.findAll();
        //assert
        Assertions.assertThat(courses).isNotNull();
        Assertions.assertThat(courses.size()).isEqualTo(2);
    }
    
    @Test
    public void CoourseService_findAll_CourseList() {
        when(courseRepository.findAll()).thenReturn(
            List.of(new Course("Mathematics"), new Course("Physics")));

        List<Course> courses = courseServiceImpl.findAll();
        Assertions.assertThat(courses).isNotNull();
        Assertions.assertThat(courses.size()).isEqualTo(2);
    }

    @Test
    public void CourseService_addStudentToCourse_NullCourse() {
        //arange
       when(courseRepository.countStudentsInCourse("Mathematics")).thenReturn(5L);
        //act
       Course course = courseServiceImpl.addStudentToCourse("Mathematics", 1L);
        //assert
        Assertions.assertThat(course).isNull();
    }

    @Test
    public void CourseService_addStudentToCourse_Course() {
        //arange
        when(courseRepository.countStudentsInCourse("Mathematics")).thenReturn(4L);
        when(studentRepository.findById(1L)).thenReturn(Optional.ofNullable(new Student("John", "Doe", 20, "Computer Science")));
        when(courseRepository.findByName("Mathematics")).thenReturn(new Course());
        when(courseRepository.save(Mockito.any(Course.class))).thenReturn(new Course());
        //act
        Course course = courseServiceImpl.addStudentToCourse("Mathematics", 1L);
        //assert
        Assertions.assertThat(course).isNotNull();
    }
}
