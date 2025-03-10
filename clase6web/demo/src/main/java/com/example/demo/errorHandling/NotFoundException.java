package com.example.demo.errorHandling;

public class NotFoundException extends RuntimeException {
    private Long id;
    private String message;

    public NotFoundException(Long id) {
        super("No se encontró el estudiante con ID: " + id);
        this.id = id;
        this.message = "No se encontró el estudiante con ID: " + id;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
