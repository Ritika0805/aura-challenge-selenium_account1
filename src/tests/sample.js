fs = require('fs');
//const { clickOnSignInLink } = require("../page-object/common-page/common-page.methods");
const commonMethod = require('../page-object/common-page/common-page.methods');
const Logger = require('../components/logger.methods');
const createAccountDetails=require('../page-object/createAccountForm/createAccountMethods')
const pageHelper=require('../components/page.methods')
let details = JSON.parse(fs.readFileSync('src/TestData/PersonalInfo.json'))


describe("Aura Code Challenge - Create User Account Tests", () => {
   beforeAll(async () => {
  //  driver = chromeDriver();
    await commonMethod.goToUrl();
  });

  afterAll(async () => {
    pageHelper.closeBrowser();
  });


  details.forEach(({ dataEmail, dataPassword, ftitle, fName,lName,day,month,year,company,address,
  address2,city,state,code,mobilePhone,homePhone,myAddressAlias }) => {
  test("it loads authentication page", async () => {
    // await driver.get(
    //   "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    // );
    // const title = await driver.getTitle();
    // expect(title).toBe("Login - My Store");
  // console.log(title);
    const title = await commonMethod.getTitle();
    expect(title).toBe("Login - My Store");
    
    await(commonMethod.getHeader());
    const header=await commonMethod.getHeader();

    expect(header).toBe("CREATE AN ACCOUNT");

    
    Logger.stepNumber(2);
    Logger.step('Typing E-mail');
    const email = await commonMethod.typeEmail(Date.now()+"@Email.com");
    Logger.verification('The inserted E-mail should be contained in E-mail field');
    await commonMethod.verifyTextInEmailField(email);



    Logger.stepNumber(3);
    Logger.step('Click on "Submit" button');
    await commonMethod.clickOnSubmitButton();
    
    await createAccountDetails.selectTitle(ftitle);
    await createAccountDetails.customerFirstName(fName);
    await createAccountDetails.custLastName(lName);
    await createAccountDetails.setpassword(dataPassword);
    await createAccountDetails.setDOBday(day);
    await createAccountDetails.setDOBMonth(month);
    await createAccountDetails.setDOBYear(year)
    await createAccountDetails.setCompany(company)
    await createAccountDetails.setAddress(address);
    await createAccountDetails.setAddress2(address2);
    await createAccountDetails.setCity(city);
   
    await createAccountDetails.setState(state);
    await createAccountDetails.setZipPostalCode(code);
    await createAccountDetails.setHomePhone(homePhone);
    await createAccountDetails.setMobilePhone(mobilePhone);
   await createAccountDetails.aliasName(myAddressAlias);

    await createAccountDetails.clickOnRegisterButton();
    const welcomeMsg = await createAccountDetails.getWelcomeMessage();
          expect(welcomeMsg).toBe("Welcome to your account. Here you can manage all of your personal information and orders.");
          await createAccountDetails.doSignout();
   
  });
  })
});
