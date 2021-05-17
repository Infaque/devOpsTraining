const assert = require("assert");

const { Given, When, Then } = require("@cucumber/cucumber");
const { Builder, By, Capabilities, Key } = require("selenium-webdriver");

const webdriver = require("selenium-webdriver");

const capabilities = Capabilities.chrome();
capabilities.set("chromeOptions", { w3c: false });

var driver = new Builder().withCapabilities(capabilities).build();

require("chromedriver");

const { expect } = require("chai");

Given(
  /^I have visited this web page/,
  { timeout: 10 * 5000 },
  async function () {
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.css(`[name="testname"]`));
    console.log("\r\nLog: Started the localhost home page", "Successfully");
  }
);
Then("I should see {string}", { timeout: 2 * 5000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  expect(foundItem).to.not.be.null;
});
//step definition of 2nd Scenario
Given(/^I have gone to homepage/, { timeout: 10 * 5000 }, async function () {
  // await driver.get("http://localhost:3000/");
  await driver.findElement(By.css(`[name="testname"]`));
  console.log("\r\nLog: Started the localhost home page", "Successfully");
});
Then("I should have {string}", { timeout: 2 * 5000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  expect(foundItem).to.not.be.null;
});
When("I click on {string}", { timeout: 2 * 5000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  // expect(foundItem).to.not.be.null;
  foundItem.click();
});
Then("I should find {string}", { timeout: 2 * 5000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  expect(foundItem).to.not.be.null;
});
//enter Email and Password Test
Then("I will click {string}", { timeout: 2 * 10000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  // expect(foundItem).to.not.be.null;
  foundItem.click();
});
Then(
  "I wait {string} seconds",
  { timeout: 2 * 100000 },
  async function (input) {
    const sec = input * 1000;

    await driver.sleep(parseInt(sec));
  }
);
Then("I enter {string}", { timeout: 2 * 10000 }, async function (input) {
  const foundItem = await driver.wait(
    webdriver.until.elementLocated(webdriver.By.css(`[data="email"]`))
  );
  foundItem.sendKeys(input);
});
Then("I entered {string}", { timeout: 2 * 10000 }, async function (input) {
  const foundItem = await driver.wait(
    webdriver.until.elementLocated(webdriver.By.css(`[data="pass"]`))
  );
  foundItem.sendKeys(input);
});
Then("I would click {string}", { timeout: 2 * 10000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  // expect(foundItem).to.not.be.null;
  foundItem.click();
});
Then("I would see {string}", { timeout: 2 * 5000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  expect(foundItem).to.not.be.null;
});

//Scenario 3
Given(
  /^I have signed in to website/,
  { timeout: 10 * 5000 },
  async function () {
    await driver.findElement(By.css(`[data="notes"]`));
    console.log("\r\nLog: Started the localhost home page", "Successfully");
  }
);

When("I click in {string}", { timeout: 2 * 5000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  // expect(foundItem).to.not.be.null;
  foundItem.click();
});

Then("I will find {string}", { timeout: 2 * 5000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  expect(foundItem).to.not.be.null;
});
When(
  "I enter in first field {string}",
  { timeout: 2 * 10000 },
  async function (input) {
    const foundItem = await driver.wait(
      webdriver.until.elementLocated(webdriver.By.css(`[data="note-input1"]`))
    );
    foundItem.sendKeys(input);
  }
);
When(
  "I enter in second field {string}",
  { timeout: 2 * 10000 },
  async function (input) {
    const foundItem = await driver.wait(
      webdriver.until.elementLocated(webdriver.By.css(`[data="note-input2"]`))
    );
    foundItem.sendKeys(input);
  }
);
When("I click {string}", { timeout: 2 * 5000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  // expect(foundItem).to.not.be.null;
  foundItem.click();
});

Then("I will see {string}", { timeout: 2 * 5000 }, async function (input) {
  await driver
    .wait(webdriver.until.elementLocated(webdriver.By.css(`[data="${input}"]`)))
    .then(function () {});
  const foundItem = await driver.findElement(By.css(`[data="${input}"]`));
  expect(foundItem).to.not.be.null;
});
