

const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const should = require("chai").should();

async function example() {

    // Launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");


    //add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Sel Test", Key.RETURN);

    // assert using Node js assertions
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText();
    /*
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
            return value;
        })
    */
    assert.strictEqual(todoText, "Sel Test");

    //assert using chai should
    todoText.should.equal("Sel Test")

    //close browser
    await driver.quit();



}

example();