const createAccountElements = require ('./createAccountElements');
const WaitHelper = require('../../components/wait.methods');
const BasePage = require('../../components/base-page.methods');
const Logger = require('../../components/logger.methods');

class createAccountMethods extends BasePage{
    async clickOnRegisterButton() {
        Logger.subStep('Click on SubmitButton');
        await WaitHelper.waitElementDisplayed(createAccountElements.elements.getregisterButton());
        await this.click(createAccountElements.elements.getregisterButton());
        //await WaitHelper.wait(10000);
    }

    async getWelcomeMessage() {
        Logger.subStep('getWelcomeMessage');
      // await WaitHelper.wait(10000);
      // await WaitHelper.waitElementDisplayed(createAccountElements.elements.getTitleAcc);
        
        const s=await this.getElementValue(createAccountElements.elements.getwelcomeMessage());
        return s;
    }

    async selectTitle(title){
        if(title=="Mr"){
            await this.click(createAccountElements.elements.getMrTitle());
        }
        else{
            await this.click(createAccountElements.elements.getMrsTitle());
        }
    }

    async customerFirstName(text){
        Logger.subStep(`Insert ${text} in "name" field`);
        await this.sendText(createAccountElements.elements.getcustFirstName(), text);
        return text;
    }

    async custLastName(text){
        Logger.subStep(`Insert ${text} in "name" field`);
        await this.sendText(createAccountElements.elements.getcustLastName(), text);
        return text;
    }

    async setpassword(text){
        await this.sendText(createAccountElements.elements.getpassword(), text);
        return text;
    }

    async setDOBday(text){
      await  this.click(createAccountElements.elements.getDays());
     //   await WaitHelper.waitElementDisplayed(createAccountElements.elements.getDays());
        await this.click(createAccountElements.elements.getDayVal(text));
        return text;
    }
    
    async setDOBMonth(text){
        await  this.click(createAccountElements.elements.getdobMonth());
     //   await WaitHelper.waitElementDisplayed(createAccountElements.elements.getDays());
        await this.click(createAccountElements.elements.getMonth(text));
        return text;
    }
    async setDOBYear(text){
        await  this.click(createAccountElements.elements.getdobYears());
     //   await WaitHelper.waitElementDisplayed(createAccountElements.elements.getDays());
        await this.click(createAccountElements.elements.getYears(text));
        return text;
    }

    async setCompany(text){
        await this.sendText(createAccountElements.elements.getcompany(), text);
        return text;
    }

    
    async setAddress(text){
        await this.sendText(createAccountElements.elements.getaddress(), text);
        return text;
    }

    
    async setAddress2(text){
        await this.sendText(createAccountElements.elements.getaddress2(), text);
        return text;
    }

    
    async setCity(text){
        await this.sendText(createAccountElements.elements.getcity(), text);
        return text;
    }


    
    async setState(text){
        await  this.click(createAccountElements.elements.getstate());
        //   await WaitHelper.waitElementDisplayed(createAccountElements.elements.getDays());
           await this.click(createAccountElements.elements.getStateViaText(text));
           return text;
    }

    
    
    async setZipPostalCode(text){
        await this.sendText(createAccountElements.elements.getpostCode(), text);
        return text;
    }

    async setHomePhone(text){
        await this.sendText(createAccountElements.elements.gethomephone(), text);
        return text;
    }
    
    async setMobilePhone(text){
        await this.sendText(createAccountElements.elements.getmobilePhone(), text);
        return text;
    }

    async aliasName(text){
        createAccountElements.elements.getaliasAddress().click();
        await this.sendText(createAccountElements.elements.getaliasAddress(), text);
        return text;
    }


    async doSignout(){
        
        await WaitHelper.waitElementDisplayed(createAccountElements.elements.singnout());
        await this.click(createAccountElements.elements.singnout())
        
    }


}


module.exports = new createAccountMethods();