// const WaitHelper = require('../../components/wait.methods');
// const BasePage = require('../../components/base-page.methods');
// const Logger = require('../../components/logger.methods');
// const welcomePageElements = require('./welcomePage.elements');

// class welcomePageMethods extends BasePage{
//     async getWelcomeMessage() {
//         Logger.subStep('getWelcomeMessage');
//         await WaitHelper.wait(7000);
//         await WaitHelper.waitElementDisplayed(welcomePageElements.elements.getwelcomeMessage);
        
//         const s=await this.getElementValue(welcomePageElements.elements.getwelcomeMessage);
//         return s;
//     }
// }

// module.exports = new welcomePageMethods();