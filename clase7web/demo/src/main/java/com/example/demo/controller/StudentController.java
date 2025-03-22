package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.errorHandling.NotFoundException;
import com.example.demo.model.Student;
import com.example.demo.service.StudentService;

import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequestMapping("/student")
public class StudentController {

    @Autowired
    StudentService service;

    @GetMapping("/all")
    public String getAllStudents(Model model) {
        model.addAttribute("estudiantes", service.SearchAll());
        return "mostrar_todos_estudiantes";
    }

    // http://localhost:8080/student/find?id=1
    @GetMapping("/find/{id}")
    public String getStudentById(Model model, @PathVariable("id") Long identificacion) {
        Student student = service.SearchById(identificacion);
        if(student != null){
            model.addAttribute("estudiante", service.SearchById(identificacion));
        }else{
            //throw new NotFoundException(identificacion);
        }
        return "mostrar_estudiante";



    }

    // los metodos get retornan una html apenas llega una petición
    @GetMapping("/add")
    public String mostrarFormularioCrear(Model model) {
        Student student = new Student();
        model.addAttribute("estudiante", student);
        return "crear_estudiante";
    }

    // los metodos post reciben una petición y retornan una redirección
    @PostMapping("/agregar")
    public String agregarEstudiante(@ModelAttribute("estudiante") Student student) {
        service.Add(student);
        return "redirect:/student/all";

    }

    @GetMapping("/delete/{id}")
    public String eliminarEstudiante(@PathVariable("id") Long identificacion) {
        service.DeleteById(identificacion);
        return "redirect:/student/all";

    }

    @GetMapping("/update/{id}")
    public String mostrarFormularioUpdate(@PathVariable("id") Long identificacion, Model model) {
        model.addAttribute("estudiante", service.SearchById(identificacion));
        return "modificar_estudiante";
    }

    @PostMapping("/update/{id}")
    public String actualizarEstudiante(@PathVariable("id") int identificacion,
            @ModelAttribute("estudiante") Student student) {
        service.Update(student);
        return "redirect:/student/all";
    }

}
