package com.example.demo.entidad;
//POJO (Plain Old Java Object)

public class User {
    private String name;
    private String username;
    private String correo;
    private int edad;

    public User() {
    }
    public User(String name, String username, String correo, int edad) {
        this.name = name;
        this.username = username;
        this.correo = correo;
        this.edad = edad;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public void setCorreo(String correo) {
        this.correo = correo;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    public String getName() {
        return name;
    }
    public String getUsername() {
        return username;
    }
    public String getCorreo() {
        return correo;
    }
    public int getEdad() {
        return edad;
    }
}
