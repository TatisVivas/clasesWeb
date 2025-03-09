package com.example.demo.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//controller recibe peticiones y media entre vista y modelo, peticiones http
@Controller //cada que inicialixo mi app, crea un controlador (servlet) que sabe responder a petición http
@RequestMapping("/mundo")
public class HolaMundoController {

    //http://localhost:8090/mundo/hola
    @GetMapping("/hola")
    //@ResponseBody
    public String holaMundo() {
        return "hola_mundo";
    }

    //http://localhost:8090/mundo/chao
    @GetMapping("/chao")
    //@ResponseBody
    public String chaoMundo() {
        return "chao_mundo";
    }
    
}
