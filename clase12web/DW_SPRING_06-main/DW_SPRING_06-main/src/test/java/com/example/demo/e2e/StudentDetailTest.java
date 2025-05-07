package com.example.demo.e2e;

import java.time.Duration;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;

import io.github.bonigarcia.wdm.WebDriverManager;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@ActiveProfiles("test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class StudentDetailTest {
    
    private final String BASE_URL = "http://localhost:4200";

    private WebDriver driver; //Driver de Selenium
    private WebDriverWait wait; //Esperar a que ocurra algo en mi página para continuar con la prueba

    @BeforeEach
    public void init(){
        //inicializar configuraciones del driver
        WebDriverManager.chromedriver().setup(); //traer driver de chrome

        ChromeOptions chromeOptions = new ChromeOptions();
        //nuevas configuraciones
        chromeOptions.addArguments("--disable-notifications");
        chromeOptions.addArguments("--disable-extensions");
        //chromeOptions.addArguments("--headless"); //Ejecutar sin abrir el navegador

        this.driver = new ChromeDriver(chromeOptions);
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(5)); //esperar maximo 5 segundos sino manda excepcion
    }

    @Test
    public void SystemTest_studentDetail_StudentName(){
        
        driver.get(BASE_URL + "/student/detail/1");

        String pathNombre = "//*[@id=\"content\"]//app-student-detail//div//ul[1]//li[1]";

        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(pathNombre)));
        WebElement liNombre = driver.findElement(By.xpath(pathNombre));

        String expectedName = "Nombre: Sebastian Angarita";
        Assertions.assertThat(liNombre.getText()).isEqualTo(expectedName);
    }
    

    @Test
    public void SystemTest_studentDetail_StudentName2(){
        
        driver.get(BASE_URL + "/student/detail/1");


        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("liNombre")));
        WebElement liNombre = driver.findElement(By.id("liNombre"));

        String expectedName = "Nombre: Sebastian Angarita";
        Assertions.assertThat(liNombre.getText()).isEqualTo(expectedName);
    }

    @Test
    public void SystemTest_studentDetail_homeWorkSize(){
        
        driver.get(BASE_URL + "/student/detail/1");

        wait.until(ExpectedConditions.presenceOfElementLocated(By.className("HomeworkName")));
        List<WebElement> liTareas = driver.findElements(By.className("HomeworkName"));

        Assertions.assertThat(liTareas.size()).isEqualTo(4);
    }

    @AfterEach
    void tearDown(){
        //Cerrar el navegador después de 10 segundos
        try {
            Thread.sleep(10000);
            driver.quit();
        } catch (InterruptedException e) {
            e.printStackTrace();
    }

    }

}
