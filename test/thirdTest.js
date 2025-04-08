

const Chrome = require("selenium-webdriver/chrome");
const { Browser, Builder, By, Key } = require("selenium-webdriver");
const should = require("chai").should();

describe("Test add todo tests - thirdTest", function () {
    it("Test add todo - thirdTest", async function () {

        //Set expected value
        let expectedValue = "Selenium Test"

        const options = new Chrome.Options();

        //let driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options.addArguments('--headless=new')).build();

        let driver = await new Builder().forBrowser("chrome").build();

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys(expectedValue, Key.RETURN);

        // assert using Node js assertions
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText();

        //assert using chai should
        todoText.should.equal(expectedValue)

        //close browser
        await driver.quit();

    })

    it("Test add todo - fourthTest - for reporting ", async function () {

        //Set expected value
        let expectedValue = "Selenium Test"

        const options = new Chrome.Options();

        //let driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options.addArguments('--headless=new')).build();

        let driver = await new Builder().forBrowser("chrome").build();


        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys(expectedValue, Key.RETURN);

        // assert using Node js assertions
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText();

        //assert using chai should
        todoText.should.equal(expectedValue)

        //close browser
        await driver.quit();

    })

})





