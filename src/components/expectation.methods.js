const WaitHelper = require('./wait.methods');
const pageHelper = require('./page.methods');
const CommonConstant = require('../page-object/common-page/common-page.constants');
const HTMLHelper = require('./html.methods');

class ExpectationHelper {
    
    async verifyTextContainedInUrl(text) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        await pageHelper.getCurrentUrl().then(function (currentUrl) {
            expect(currentUrl).toContain(text)
        });
    }

    async verifyElementContainsText(element, text) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        element.getText().then(function (currentText) {
            expect(currentText).toContain(text)
        });
    }

    async verifyElementContainsValue(element, val) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        element.getAttribute(HTMLHelper.attributes.value).then(function (currentText) {
            expect(currentText).toContain(val)
        });
    }

    async verifyElementDisplayed(element) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        element.isDisplayed().then(function (isDisplayed) {
            expect(isDisplayed).toBeTrue();
        });
    }

    async verifyStringAreEquals(stringOne, stringTwo) {
        expect(stringOne).toEqual(stringTwo)
    }

    async verifyElementPresent(element) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        element.isDisplayed().then(function (isDisplayed) {
            expect(isDisplayed).toBeTrue();
        });
    }
}
module.exports = new ExpectationHelper();
