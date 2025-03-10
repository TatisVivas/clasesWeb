package com.example.demo.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import com.example.demo.errorHandling.NotFoundException;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository repository;

    @Override
    public Student SearchById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new NotFoundException(id));
    }

    @Override
    public Collection<Student> SearchAll() {
        return repository.findAll();
    }

    @Override
    public void DeleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void Update(Student student) {
        repository.save(student);
    }

    @Override
    public void Add(Student student) {
        repository.save(student);
    }

}
