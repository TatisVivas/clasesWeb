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
        data.put(1, new Student("Juan", "Ing. Sistemas", "sV5oQ@example.com", "5to"));
        data.put(2, new Student("Pedro", "Ing. Industrial", "3lSdM@example.com", "5to"));
        data.put(3, new Student("Luis", "Ing. Civil", "3lSdM@example.com", "5to"));
    }

    public Student findById(int id) {
        return data.get(id);
    }

    public Collection<Student> findAll() {
        return data.values();
    }


}
