package com.example.demo;
import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.HttpHeadResponseDecorator;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/download") //cuadno quiera ingresar aquí se redireccione a otra pagina (servlet)
public class DownloadServlet extends HttpServlet {
    Logger logger = LoggerFactory.getLogger(DownloadServlet.class);

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws IOException { //cada vez que se haga una solicitud a este servlet, se ejecutara este metodo
        resp.setContentType("text/html");
        resp.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment");
        ServletOutputStream out = resp.getOutputStream();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Downloads</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Dercargas</h1>");
        out.println("<a href='/referencia'>Ir a referencia</a>");
        out.println("<a href='/redir'>Ir a redireccionar</a>");
        out.println("</body>");
        out.println("</html>");
        

}
}