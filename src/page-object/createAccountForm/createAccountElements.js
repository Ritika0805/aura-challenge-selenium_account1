const webdriver = require('selenium-webdriver');
const BasePage = require('../../components/base-page.methods');

const By = webdriver.By;
const { attributes: attr } = require('./createAccount.constants');

class createAccountElements extends BasePage{

    get elements() {
        return {
            getMrTitle() {
                return driver.findElement(By.id(attr.mrTitle));
            },
            getMrsTitle() {
                return driver.findElement(By.id(attr.mrsTitle));
            },
            getcustFirstName() {
                return driver.findElement(By.id(attr.custFirstName))
            },
            getcustLastName() {
                return driver.findElement(By.id(attr.custLastName))
            },
            getemail() {
                return driver.findElement(By.id(attr.email))
            },
            getpassword() {
                return driver.findElement(By.id(attr.password))
            },
            getDays() {
               
                return driver.findElement(By.id(attr.dobDay))
            },
            getDayVal(s){
                return driver.findElement(By.xpath('//select[@id="days"]//option[@value='+s+']'))
            },
            getdobMonth() {
                return driver.findElement(By.id(attr.dobMonth))
            },
            getMonth(s){
                return driver.findElement(By.xpath('//select[@id="months"]//option[@value='+s+']'))
            },
            getdobYears() {
                return driver.findElement(By.id(attr.dobYears))
            },
            getYears(s){
                return driver.findElement(By.xpath('//select[@id="years"]//option[@value='+s+']'))
            },
            getfirstName() {
                return driver.findElement(By.id(attr.firstName))
            },
            getlastName() {
                return driver.findElement(By.id(attr.lastName))
            },
            getcompany() {
                return driver.findElement(By.id(attr.company))
            },
            getaddress() {
                return driver.findElement(By.id(attr.address))
            },
            getaddress2() {
                return driver.findElement(By.id(attr.address2))
            },
            getcity() {
                return driver.findElement(By.id(attr.city))
            },
            getStateViaText(s){
                return driver.findElement(By.xpath('//select[@id="id_state"]//option[text()="'+s+'"]'))
            },
            getstate() {
                return driver.findElement(By.id(attr.state))
            },
            getpostCode() {
                return driver.findElement(By.id(attr.postCode))
            },
            getcountry() {
                return driver.findElement(By.id(attr.country))
            },
            gethomephone() {
                return driver.findElement(By.id(attr.homephone))
            },
            getmobilePhone() {
                return driver.findElement(By.id(attr.mobilePhone))
            },
            getaliasAddress() {
                return driver.findElement(By.id(attr.aliasAddress))
            },
            getregisterButton() {
                return driver.findElement(By.css(attr.registerButton))
            },

            getwelcomeMessage(){
                return driver.findElement(By.xpath(attr.welcomeMessage));
            },
            getTitleAcc(){
                return driver.findElement(By.xpath(attr.titleMyAcc));
            },
            singnout(){
                return driver.findElement(By.xpath(attr.signout))
            }

        }

    }
}


module.exports = new createAccountElements();