const {Builder, By, Key} = require('selenium-webdriver');

async function myFunction(){

    //launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://lambdatest.github.io/sample-todo-app/")
    
    //add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Yohanes Armenian", Key.RETURN)


    //exit browser
    await driver.quit();
}
myFunction()