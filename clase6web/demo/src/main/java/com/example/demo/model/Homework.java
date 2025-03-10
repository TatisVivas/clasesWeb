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

    private String detail;
    private String description;
    @ManyToOne //una tarea a un estudiante, y un estudiante tiene varias tareas
    private Student estudiante;
    
    public Homework() {}

    public Homework(String detail, String description) {
        this.detail = detail;
        this.description = description;
        }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public Student getStudent() {
        return estudiante;
    }

    public void setStudent(Student student) {
        this.estudiante = student;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
        
}
