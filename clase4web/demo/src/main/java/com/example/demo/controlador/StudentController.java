package com.example.demo.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.servicio.StudentService;

@Controller
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/all")
    public String getAllStudents(Model model) {
        model.addAttribute("estudiantes", service.SearchAll());
        return "mostrar_todos_estudiantes";
    }

    //http://localhost:8080/student/find?id=1
    @GetMapping("/find/{id}")
    public String getStudentById(Model model, @PathVariable("id") int identificacion) { {
        model.addAttribute("estudiante", service.SearchById(identificacion));
        return "mostrar_estudiante";
    }

}
}
