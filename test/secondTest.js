

const Chrome = require("selenium-webdriver/chrome");
const { Browser, Builder, By, Key } = require("selenium-webdriver");
const should = require("chai").should();

describe("Test add todo tests - secondTest", function () {
    it("Test add todo - secondTest", async function () {

        // Launch the browser
        const options = new Chrome.Options();

        let driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options.addArguments('--headless=new')).build();

        //let driver = await new Builder().forBrowser("chrome").build();

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");



        //add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("Sel Test", Key.RETURN);

        // assert using Node js assertions
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText();

        //assert using chai should
        todoText.should.equal("Sel Test")

        //close browser
        await driver.quit();

    })

})





