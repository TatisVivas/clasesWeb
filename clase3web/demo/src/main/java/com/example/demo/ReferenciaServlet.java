package com.example.demo;
import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/referencia")
public class ReferenciaServlet extends HttpServlet {
    Logger logger = LoggerFactory.getLogger(ReferenciaServlet.class);

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
        out.println("<h1>Página referenciada</h1>");
        out.println("<a href='/holaMundo'>Volver</a>");
        out.println("</body>");
        out.println("</html>");
    }
}