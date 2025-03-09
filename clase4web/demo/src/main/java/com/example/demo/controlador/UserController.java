package com.example.demo.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.entidad.User;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired //sacar a ese usuario de la bolsita
    private User user;

    @GetMapping("/info2")    
    public String mostrarInfo(Model model){
        model.addAttribute("usuario", user);
        return "datos_usuario";
    }
    //thymeleaf ayuda a ingresar objetos que están en java a mi página.
    //1. pido petición
    //2. Creo modelo
    //3. Devuelvo la vista

    @GetMapping("/info")
    @ResponseBody
    public String mostrarInformacionUsuario(){
        String html = "";
        html+= "<p>Información del usuario</p>";
        html+= "<p>Nombre: "+user.getName()+"</p>";
        html+= "<p>Username: "+user.getUsername()+"</p>";
        html+= "<p>Edad: "+user.getEdad()+"</p>";
        html+= "<p>Correo: "+user.getCorreo()+"</p>";
        return html;

    }
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
}

