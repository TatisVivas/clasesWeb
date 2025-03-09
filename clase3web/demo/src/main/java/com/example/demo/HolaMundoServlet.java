package com.example.demo;
import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/holaMundo")
public class HolaMundoServlet extends HttpServlet {
    Logger logger = LoggerFactory.getLogger(HolaMundoServlet.class);

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws IOException { //cada vez que se haga una solicitud a este servlet, se ejecutara este metodo
        resp.setContentType("text/html");
        logger.error("Hola Mundo");
        logger.warn("Hola aaa");
        logger.info("Hola Mundo");
        
        ServletOutputStream out = resp.getOutputStream();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Hola Mundo</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Hola Mundo</h1>");
        out.println("<a href='/referencia'>Ir a referencia</a>");
        out.println("<a href='/redir'>Ir a redireccionar</a>");
        out.println("<a href='/download'>Ir a descargas</a>");
        out.println("<a href='/cookies'>Ir a cookies</a>");
        out.println("<a href='/form'>Ir a form</a>");
        out.println("</body>");
        out.println("</html>");
    }
}