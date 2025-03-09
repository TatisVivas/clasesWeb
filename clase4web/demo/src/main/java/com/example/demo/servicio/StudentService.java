package com.example.demo.servicio;

import java.util.Collection;


import com.example.demo.entidad.Student;

//se4rvicio se encarga de realizar la lógica del negocio y conectarse ocn repositorio para que el realice las queries necesarias 
public interface StudentService {


    public Student SearchById(int id);

    public Collection<Student> SearchAll();
    
}