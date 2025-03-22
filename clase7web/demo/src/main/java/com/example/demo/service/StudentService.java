package com.example.demo.service;

import java.util.Collection;

import com.example.demo.model.Student;

//se4rvicio se encarga de realizar la lógica del negocio y conectarse ocn repositorio para que el realice las queries necesarias 
public interface StudentService {


    public Student SearchById(Long id);

    public Collection<Student> SearchAll();
    public void DeleteById(Long id);
    public void Update(Student student);
    public void Add(Student student);
    
}