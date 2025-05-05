package com.example.demo.service;

import static org.mockito.Mockito.atMostOnce;

import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;

import com.example.demo.service.CourseService;

import com.example.demo.model.Course;

@SpringBootTest //inicializa la app y ejecuta las pruebas
@DirtiesContext (classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
@ActiveProfiles("test")
public class CourseServiceTestNaive {

    @Autowired
    private CourseService courseService;
    @BeforeEach
    public void init() {
        Course course = new Course("Mathematics");
        Course course2 = new Course("Physics");

        courseService.createCourse(course);
        courseService.createCourse(course2);
        
    }



    @Test
    public void CourseService_createCourse_Course() {
        //arange
        Course course = new Course("Mathematics");
        Course course2 = new Course("Physics");

        //act
        Course newCourse = courseService.createCourse(course);
        newCourse = courseService.createCourse(course2);

        //assert
        Assertions.assertThat(newCourse).isNotNull();

    }
    @Test 
    public void CourseService_findAll_CourseList() {
        //arange
        //act
        List<Course> courses = courseService.findAll();
        //assert
        Assertions.assertThat(courses).isNotNull();
        Assertions.assertThat(courses.size()).isEqualTo(2);
    }
    
}
