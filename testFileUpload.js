const {Builder, By, Key} = require('selenium-webdriver');

async function myFunction(){

    //launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://formy-project.herokuapp.com/fileupload")
    
    //add a todo
    await driver.findElement(By.id("file-upload-field")).sendKeys("image12.png")


    //exit browser
    // await driver.quit();
}
myFunction()