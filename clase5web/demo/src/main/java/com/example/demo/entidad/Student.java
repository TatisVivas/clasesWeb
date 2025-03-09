package com.example.demo.entidad;

public class Student {
    private Integer id;
    private String nombre;
    private String carrera;
    private String correo;
    private String semestre;

    

    public Student() {}

    public Student(Integer id, String nombre, String carrera, String correo, String semestre) {
        this.id=id;
        this.nombre = nombre;
        this.carrera = carrera;
        this.correo = correo;
        this.semestre = semestre;
    }

    // Getters and Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getCarrera() { return carrera; }
    public void setCarrera(String carrera) { this.carrera = carrera; }
    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }
    public String getSemestre() { return semestre; }
    public void setSemestre(String semestre) { this.semestre = semestre; }
}
