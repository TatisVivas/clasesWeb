package com.example.demo.errorHandling;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ErrorController {
    @ExceptionHandler(NotFoundException.class)
    public String error(Model model, NotFoundException e) {
        model.addAttribute("id", e.getId());
        model.addAttribute("mensaje", e.getMessage());
        return "pagina_error";
    }
}
