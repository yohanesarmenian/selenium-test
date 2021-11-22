const {Builder, By, Key} = require('selenium-webdriver');

async function myFunction(){

    //launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://formy-project.herokuapp.com/datepicker")
    
    //add a todo
    await driver.findElement(By.id("datepicker")).sendKeys("03/12/21", Key.RETURN) 
    //PENJELASAN : element date yang dipilih dari id html yaitu "datepicker", kemudia secara manual dimasukan
    // tanggal "03/12/21" dan untuk menutup menu tanggal kasukan key.RETURN


    //exit browser
    // await driver.quit();
}
myFunction()