package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Homework {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String detail;

    @ManyToOne
    private Student student;

    public Homework() {
    }

    public Homework(String name, String detail) {
        this.name = name;
        this.detail = detail;
    }

    public Homework(Long id, String name, String detail) {
        this.id = id;
        this.name = name;
        this.detail = detail;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
    
    
}
