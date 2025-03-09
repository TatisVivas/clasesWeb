package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.example.demo.entidad.User;

//@SpringBootApplication //Equivale a:
@Configuration // desarrollarán beans
@EnableAutoConfiguration // configuración automática, leyendo todas las dependencias y las relaciona con
							// el proyecto
@ComponentScan // uando inicializo la app, busca todos los componentes que estén en el paquete
				// y los registra (o sea servlets en el ejemplo pasado)
// servlet por notación hace new de servlet que recibe peticiones
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean //Son objetos de Java que viven en contexto global de la aplicación (contenedor de inversión de dependencias)
	public User user() {
		return new User("Tatis", "sushi", "tatis@gmail.com", 20);
	}
	@Bean
	public User user2(){
		return new User("Juanpa", "baplo", "jpcanon@gmail.com", 20);
	}

}
