const {Builder, By, Key} = require('selenium-webdriver');

async function myFunction(){

    //launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://formy-project.herokuapp.com/form")
    
    //add a todo
    

    await driver.findElement(By.id("first-name")).sendKeys("Yohanes")
    await driver.findElement(By.id("last-name")).sendKeys("Armenian Putra")
    await driver.findElement(By.id("job-title")).sendKeys("QA Engineer")
    await driver.findElement(By.id("radio-button-2")).click()
    await driver.findElement(By.id("checkbox-1")).click()
    await driver.findElement(By.css("option[value='1']")).click() //penganti css selector
    await driver.findElement(By.id("datepicker")).sendKeys("05/28/2019", Key.RETURN)
    await driver.findElement(By.css(".btn.btn-lg.btn-primary")).click()

    //exit browser
    // await driver.quit();
}
myFunction()