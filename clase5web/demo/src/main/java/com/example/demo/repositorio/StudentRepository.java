package com.example.demo.repositorio;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.example.demo.entidad.Student;

@Repository
public class StudentRepository {
    
    private Map<Integer, Student> data = new HashMap<>();

    public StudentRepository() {
        data.put(1, new Student(1,"Juan", "Ing. Sistemas", "sV5oQ@example.com", "5to"));
        data.put(2, new Student(2, "Pedro", "Ing. Industrial", "3lSdM@example.com", "5to"));
        data.put(3, new Student(3,"Luis", "Ing. Civil", "3lSdM@example.com", "5to"));
    }

    public Student findById(int id) {
        return data.get(id);
    }

    public Collection<Student> findAll() {
        return data.values();
    }
    //nuevos métodos
    public void deleteById(int id) {
        data.remove(id);
    }
    public void update(Student student) {
        data.put(student.getId(), student);
    }
    public void add(Student student) {
        int tam= data.size();
        int lastId= data.get(tam).getId();
        student.setId(lastId+1);
        data.put(student.getId(), student);
    }



}
