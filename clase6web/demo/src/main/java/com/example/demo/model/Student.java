package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "students")
public class Student {
    @Column(name = "nombre")
    private String nombre;
    private String carrera;
    private String correo;
    private String semestre;
    @Id
    @GeneratedValue
    private Long id;

    @OneToMany(mappedBy = "estudiante")
    private List<Homework> homeworks = new ArrayList<>();

    @ManyToMany
    private List<Teacher> teachers = new ArrayList<>();

    public Student() {
    }

    public Student(Long id, String nombre, String carrera, String correo, String semestre) {
        this.id = id;
        this.nombre = nombre;
        this.carrera = carrera;
        this.correo = correo;
        this.semestre = semestre;
    }

    public Student(String nombre, String carrera, String correo, String semestre) {
        this.nombre = nombre;
        this.carrera = carrera;
        this.correo = correo;
        this.semestre = semestre;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCarrera() {
        return carrera;
    }

    public void setCarrera(String carrera) {
        this.carrera = carrera;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getSemestre() {
        return semestre;
    }

    public void setSemestre(String semestre) {
        this.semestre = semestre;
    }

    public List<Homework> getHomeworks() {
        return homeworks;
    }

    public void setHomeworks(List<Homework> homeworks) {
        this.homeworks = homeworks;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
    }

}
