package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;

import io.swagger.v3.oas.annotations.Operation;


@RestController // Indica que esta clase es un controlador REST
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:4200") // Permite solicitudes CORS desde el frontend, especifica al back qué páginas me pueden hacer peticiones
public class StudentController {

    @Autowired
    StudentService studentService;

    //http://localhost:8090/student/all
    @GetMapping("/all")
    @Operation(summary = "Encuentra todos los estudiantes")
    public List<Student> mostrarEstudiantes() { //devolver el tipo de dato en vez de string
        return studentService.SearchAll();
    }

    // http://localhost:8080/student/find?id=1
    @GetMapping("/find")
    public Student mostrarInfoEstudiante(@RequestParam("id") Long id) {

        Student student = studentService.SearchById(id);

        return student;
    }

    // http://localhost:8080/student/find/1
    @GetMapping("/find/{id}")
    public Student mostrarInfoEstudiante2(@PathVariable("id") Long id) {
        Student student = studentService.SearchById(id);
        return student;
    }

    @PostMapping("/add")
    public void agregarEstudiante(@RequestBody Student student){
        studentService.add(student);
    }

    //delete
    //http://localhost:8090/delete/1
    @DeleteMapping("/delete/{id}")
    public void eliminarEstudiante(@PathVariable("id") Long id){
        studentService.deleteById(id);
    }


    @PostMapping("/update/{id}")
    public void actualizarEstudiante(@RequestBody Student student, @PathVariable("id") int id){
        studentService.update(student);
    }


    @GetMapping("/teacher/{id}")
    public String mostrarEstudiantesDeProfesor(@PathVariable("id") String id, Model model){
        model.addAttribute("estudiantes", studentService.findStudentsFromTeacher(id));
        return "mostrar_todos_estudiantes";
    }


    @GetMapping("/homework/{type}")
    public String mostrarEstudiantePorTrabajos(@PathVariable("type") String type, Model model){
        model.addAttribute("estudiantes", studentService.findStudentsByHomework(type));
        return "mostrar_todos_estudiantes";
    }
}
