package com.example.demo;
import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/cookies")
public class CookiesServlet extends HttpServlet {
    Logger logger = LoggerFactory.getLogger(ReferenciaServlet.class);

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws IOException { //cada vez que se haga una solicitud a este servlet, se ejecutara este metodo
        resp.setContentType("text/html");



        logger.error("Hola Mundo");
        logger.warn("Hola aaa");
        logger.info("Hola Mundo");
        //guardar cookies a traves de resp
        if(req.getCookies() != null){
            for(Cookie c : req.getCookies()){
                logger.info("Cookie: " + c.getName() + " " + c.getValue());
            }
        }
        Cookie cookie = new Cookie("nombre",  "Tatis");
        resp.addCookie(cookie);
        Cookie cookie2 = new Cookie("Hola", "Juanpa");
        resp.addCookie(cookie2);
        
        ServletOutputStream out = resp.getOutputStream();

        //como desde el request obtener la página que se refirió a mi pagina actual
        String referer = req.getHeader(HttpHeaders.REFERER);
        logger.info("Referer: " + referer);

        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Cookies</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Página referenciada</h1>");
        out.println("<a href='/holaMundo'>Volver</a>");
        out.println("</body>");
        out.println("</html>");
    }
}