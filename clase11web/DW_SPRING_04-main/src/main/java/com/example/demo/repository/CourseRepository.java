package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

    @Query("SELECT COUNT(s) FROM Course c JOIN c.student s WHERE c.name = :courseName")
    Long countStudentsInCourse(@Param("courseName") String courseName);

    Course findByName(String name);
    
}
