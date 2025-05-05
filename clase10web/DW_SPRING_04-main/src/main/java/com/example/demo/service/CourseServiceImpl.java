package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Course;
import com.example.demo.model.Student;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.StudentRepository;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository repo;

    @Autowired
    private StudentRepository studentRepository;
    @Override
    public Course createCourse(Course course) {
        return repo.save(course);
    }

    @Override
    public Course findById(Long id) {
        return repo.findById(id).get();
    }

    @Override
    public List<Course> findAll() {
        return repo.findAll();
    }

    @Override
    public Course addStudentToCourse(String courseName, Long studentId) {
        Long cantidad = repo.countStudentsInCourse(courseName);
        if (cantidad>=5){
            return null;
        }else{
            Student student = studentRepository.findById(studentId).get();
            Course course = repo.findByName(courseName);
            course.setStudent(student);
            return repo.save(course);
        }
    }
    
}
