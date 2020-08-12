package com.dkatalislabs.testbase;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import com.dkatalislabs.utilities.ActionMethods;

public class BaseTest {

	public static WebDriver driver;
	public static Properties property;

	/*
	 * Initialize the drivers using property files and call appropriate driver based
	 * on browser value
	 */
	@BeforeMethod
	public static WebDriver initialization() {
		try {
			property = new Properties();
			FileInputStream fis = new FileInputStream(System.getProperty("user.dir") + "//project.properties");
			property.load(fis);
		} catch (IOException e) {
			e.getMessage();
		}
		String browserName = property.getProperty("browser");

		if (browserName.equalsIgnoreCase("chrome")) {
			String exePath = System.getProperty("user.dir") + "//lib//chromedriver";
			System.setProperty("webdriver.chrome.driver", exePath);
			driver = new ChromeDriver();
		} else if (browserName.equalsIgnoreCase("chrome")) {
			String exePath = System.getProperty("user.dir") + "\\lib\\geckodriver.exe";
			System.setProperty("webdriver.gecko.driver", exePath);
			driver = new FirefoxDriver();
		}

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(property.getProperty("applicationUrl"));
		waitForPageReady();
		return driver;
	}

	public static void waitForPageReady() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("return document.readyState").toString().equals("complete");
	}

	@AfterMethod(alwaysRun = true)
	public void tearDown() {
		driver.close();
	}
}