package com.example.demo.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;
import com.fasterxml.jackson.databind.ObjectMapper;

//pruebas unitarias
//pruebas de integracion: Para probar un componente se prueban todos los componentes dependientes
@WebMvcTest(controllers = StudentController.class)
@ActiveProfiles("test")
@ExtendWith(SpringExtension.class)
public class StudentContollerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StudentService studentService;


    @Autowired
    ObjectMapper objectMapper;
    
    @Test
    public void StudentController_agregarEstudiante_Student() throws Exception {
        Student student = new Student("John", "Doe", 20, "Computer Science");

        when(studentService.add(Mockito.any(Student.class))).thenReturn(student);

        ResultActions resultActions = mockMvc.perform(
            post("/student/add")
            .contentType("application/json")
            .content(objectMapper.writeValueAsString(student)));

        resultActions.andExpect(status().isCreated())
        .andExpect(content().contentType("application/json"))
        .andExpect(jsonPath("$.nombre").value(student.getNombre()))
        .andExpect(jsonPath("$.carrera").value(student.getCarrera()));
    }

    @Test
    public void StudentController_mostrarEstudiantes_StudentList() throws Exception {
        when(studentService.SearchAll()).thenReturn(
            List.of(
                new Student("John", "Doe", 20, "Computer Science"),
                new Student("Jane", "Doe", 22, "Mathematics")));
        ResultActions resultActions = mockMvc.perform(get("/student/all"));
        resultActions.andExpect(status().isOk())
        .andExpect(content().contentType("application/json"))
        .andExpect(jsonPath("$.size()").value(2));   
    }

    @Test
    public void StudentController_mostrarEstudiante2_Student() throws Exception {
        
        when(studentService.SearchById(Mockito.anyLong())).thenReturn(null);

        ResultActions resultActions = mockMvc.perform(get("/student/find/")
        .param("id","1"));
        resultActions.andExpect(status().isNotFound());
    }

}
