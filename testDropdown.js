const {Builder, By, Key} = require('selenium-webdriver');

async function myFunction(){

    //launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://formy-project.herokuapp.com/dropdown")
    
    //add a todo
    await driver.findElement(By.id("dropdownMenuButton")).click()
    await driver.findElement(By.id("autocomplete")).click()


    //exit browser
    // await driver.quit();
}
myFunction()