const commonElement = require ('./common-page.elements');
const WaitHelper = require('../../components/wait.methods');
const BasePage = require('../../components/base-page.methods');
const Logger = require('../../components/logger.methods');
const ExpectationHelper=require('../../components/expectation.methods');
const { WebElement } = require('selenium-webdriver');

class CommonPageHelper extends BasePage {
    async clickOnSubmitButton() {
        Logger.subStep('Click on SubmitButton');
        await WaitHelper.waitElementDisplayed(commonElement.elements.getSubmitButton());
        
        await this.click(commonElement.elements.getSubmitButton());
    }

    async getHeader(){
        await WaitHelper.waitElementDisplayed(commonElement.elements.getHeader());
        let s=await this.getElementValue(commonElement.elements.getHeader());
        return s;
    }

    async typeEmail(varEmail) {
        Logger.subStep(`Insert ${varEmail} in "Email" field`);
        await this.sendText(commonElement.elements.getEmailTextBox(), varEmail);
        return varEmail;
    }

    async verifyTextInEmailField(text) {
        Logger.subVerification(`${text} should be contained in Email field`);
        await ExpectationHelper.verifyElementContainsValue(commonElement.elements.getEmailTextBox(), text);
    }



}

module.exports = new CommonPageHelper();