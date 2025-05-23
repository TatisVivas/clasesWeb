package com.example.demo.e2e;

import java.time.Duration;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
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
public class StudentHomeTest {
    
    private final String BASE_URL = "http://localhost:4200";

    private WebDriver driver;
    private WebDriverWait wait;

    @BeforeEach
    public void init(){
        
        WebDriverManager.chromedriver().setup();

        ChromeOptions chromeOptions = new ChromeOptions();

        chromeOptions.addArguments("--disable-notifications");
        chromeOptions.addArguments("--disable-extensions");
        //chromeOptions.addArguments("--headless");

        this.driver = new ChromeDriver(chromeOptions);
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(5));
    }

    @Test
    public void HomeTest_deleteStudent_listSize(){
        
        driver.get(BASE_URL + "/home");

        String path = "//*[@id=\"content\"]//app-student-table//div//table//tbody//tr[3]//td[5]//button[2]";

        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(path)));
        WebElement btnElement = driver.findElement(By.xpath(path));
        btnElement.click();

        List<WebElement> list = driver.findElements(By.className("btn-danger"));
        Assertions.assertThat(list.size()).isEqualTo(4);
    }

    @Test
    public void HomeTest_deleteStudent_EmptyList(){
        
        driver.get(BASE_URL + "/home");


        wait.until(ExpectedConditions.presenceOfElementLocated(By.className("btn-danger")));
        List<WebElement> allButtons = driver.findElements(By.className("btn-danger"));
        
        for (WebElement webElement : allButtons) {
            webElement.click();
        }
        

        List<WebElement> list = driver.findElements(By.className("btn-danger"));
        Assertions.assertThat(list.size()).isEqualTo(0);
    }

    @Test
    public void HomeTest_addStudent_listSize(){

        driver.get(BASE_URL + "/home");
        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("btnAgregar")));
        WebElement btnAgregar = driver.findElement(By.id("btnAgregar"));
        btnAgregar.click();

        WebElement inputName = driver.findElement(By.id("nombre"));
        WebElement inputApellido = driver.findElement(By.id("apellido"));
        WebElement inputEmail = driver.findElement(By.id("email"));
        WebElement inputPhone = driver.findElement(By.id("phone"));

        inputName.sendKeys("Sebastian");
        inputApellido.sendKeys("Angarita");
        inputEmail.sendKeys("juseanto@javeriana.edu.co");
        inputPhone.sendKeys(Keys.BACK_SPACE);
        inputPhone.sendKeys("1234567890");

        WebElement btnSubmit = driver.findElement(By.id("enviarEstudianteBtn"));
        btnSubmit.click();
    
        List<WebElement> list = driver.findElements(By.className("liStudentName"));
        Assertions.assertThat(list.size()).isEqualTo(6);
    }
    @AfterEach
    void tearDown(){
        try {
            Thread.sleep(5000);
            driver.quit();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }



}
