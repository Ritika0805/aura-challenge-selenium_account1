const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const {attributes: attr} = require ('./common-page.constants');

class CommonPage{
    get elements() {
        return {
            getsignInLink() {
                return driver.findElement(By.css(attr.signInLinkButton));
            }  ,
            getHeader(){
                return driver.findElement(By.css(attr.createAccountHeader));
            },
            getEmailTextBox(){
                return driver.findElement(By.css(attr.emailTextBox));
            },
            getSubmitButton(){
                return driver.findElement(By.css(attr.submitButton));
            },
            getErrorSpan(){
                return driver.findElement(By.css(attr.errorSpan));
            }
        } 
            
    }
}

module.exports = new CommonPage();