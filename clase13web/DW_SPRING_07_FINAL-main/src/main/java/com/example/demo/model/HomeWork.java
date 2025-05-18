package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class HomeWork {
    
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String detail;

    @JsonIgnore
    @ManyToOne
    private Student estudiante;

    public HomeWork( String name, String detail) {
        this.name = name;
        this.detail = detail;
    }

}
