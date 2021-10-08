const CommonConstant = require('../page-object/common-page/common-page.constants');
const ExpectationHelper = require('./expectation.methods');
const Logger = require('./logger.methods');
const WaitHelper = require('./wait.methods');
const chromeDriver =  require("@sitespeed.io/chromedriver");
const Chrome = require("selenium-webdriver/chrome");
const { Builder } = require("selenium-webdriver");
const options = new Chrome.Options();
  options.addArguments("--no-sandbox");
  options.addArguments("--incognito");
  options.addArguments("--disable-popup-blocking");
  options.addArguments("--disable-default-apps");
  options.addArguments("--disable-infobars");
  options.addArguments("--disable-extensions");
  //options.headless();

  const service = new Chrome.ServiceBuilder(chromeDriver.binPath());

  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeService(service)
    .setChromeOptions(options)
    .build();

class BasePage {
    constructor() {
        global.driver = driver;
    }


    async getTitle(){
        driver.manage().window().maximize();
       return driver.getTitle();
       
    }

    async goToUrl() {
        await driver.get(CommonConstant.commonData.url);
        await WaitHelper.waitForPageToLoad();
    }

    async click(element) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        await element.click();
    }

    async sendText(element, text) {
        await WaitHelper.waitElementDisplayed(element);
        await element.sendKeys(text);
    }

    async pressKey(key) {
        const element = driver.switchTo().activeElement();
        await element.sendKeys(key);
    }

    async verifyUrl(url) {
        Logger.subVerification(`The current URL should contain ${url}`);
        await ExpectationHelper.verifyTextContainedInUrl(url);
    }

    async getElementValue(element) {
        let elementValue;
       // await WaitHelper.waitElementDisplayed(element);
        await element.getText().then(function (currentValue) {
            elementValue = currentValue;
        });
        return elementValue;
    }

    async sendTextWithoutPassingElement(text) {
        const element = driver.switchTo().activeElement();
        await element.sendKeys(text);
    }
}
module.exports = BasePage;
