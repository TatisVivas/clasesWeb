package com.example.demo;
import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/redir") //cuadno quiera ingresar aquí se redireccione a otra pagina (servlet)
public class RedirectServlet extends HttpServlet {
    Logger logger = LoggerFactory.getLogger(RedirectServlet.class);

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws IOException { //cada vez que se haga una solicitud a este servlet, se ejecutara este metodo
        resp.setContentType("text/html");
        resp.setStatus(308);
        resp.addHeader(HttpHeaders.LOCATION, "http://localhost:8090/referencia");
        

}
}