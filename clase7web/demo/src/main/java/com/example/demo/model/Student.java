package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "STUDENT_TABLE")

public class Student {
    @Column(name = "NAME")
    private String nombre;
    private String carrera;
    private String correo;
    private String semestre;

    @Id
    @GeneratedValue
    private Long id;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Homework> tareas = new ArrayList<>();

    @ManyToMany
    @JoinTable(name = "course", joinColumns = @JoinColumn(name = "student_id"), inverseJoinColumns = @JoinColumn(name = "teacher_id"))
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

    public List<Homework> getTareas() {
        return tareas;
    }

    public void setTareas(List<Homework> tareas) {
        this.tareas = tareas;
    }

    public List<Teacher> getProfesores() {
        return teachers;
    }

    public void setProfesores(List<Teacher> profesores) {
        this.teachers = profesores;
    }
}
