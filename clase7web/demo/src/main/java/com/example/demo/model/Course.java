package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Course {

    @Id
    @GeneratedValue
    Long id;

    @ManyToOne
    private Teacher teacher;

    @ManyToOne
    private Student student;

    private String name;

    public Course() {
    }

    public Course(String name) {
        this.name = name;
    }

    public Course(Long id, Teacher teacher, Student student, String name) {
        this.id = id;
        this.teacher = teacher;
        this.student = student;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
