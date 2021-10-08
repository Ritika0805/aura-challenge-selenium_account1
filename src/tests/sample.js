const chromeDriver = require("../drivers/chrome");
//const { clickOnSignInLink } = require("../page-object/common-page/common-page.methods");
const commonMethod = require('../page-object/common-page/common-page.methods');
const Logger = require('../components/logger.methods');
const { testData: EmailData} = require('../TestData/testData');
const createAccountDetails=require('../page-object/createAccountForm/createAccountMethods')
//const welcomePageMessage=require('../page-object/welcomePage/welcomePage.methods')
const pageHelper=require('../components/page.methods')

describe("Aura Code Challenge - Create User Account Tests", () => {
  let driver;
   beforeAll(async () => {
  //  driver = chromeDriver();
    await commonMethod.goToUrl();
  });

  afterAll(async () => {
    pageHelper.closeBrowser();
  });

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
    const email = await commonMethod.typeEmail(EmailData.dataEmail)
    Logger.verification('The inserted E-mail should be contained in E-mail field');
    await commonMethod.verifyTextInEmailField(email);



    Logger.stepNumber(3);
    Logger.step('Click on "Submit" button');
    await commonMethod.clickOnSubmitButton();
    
    const formTitle=await createAccountDetails.selectTitle(EmailData.title);
    const fName=await createAccountDetails.customerFirstName(EmailData.fName);
    const lName=await createAccountDetails.custLastName(EmailData.lName);
    const password=await createAccountDetails.setpassword(EmailData.dataPassword);
    const day=await createAccountDetails.setDOBday(EmailData.day);
    const month=await createAccountDetails.setDOBMonth(EmailData.month);
    const year=await createAccountDetails.setDOBYear(EmailData.year)
    const company=await createAccountDetails.setCompany(EmailData.company)
    const add=await createAccountDetails.setAddress(EmailData.address);
    const add2=await createAccountDetails.setAddress2(EmailData.address2);
    const city=await createAccountDetails.setCity(EmailData.city);
   
    const state=await createAccountDetails.setState(EmailData.state);
    const code=await createAccountDetails.setZipPostalCode(EmailData.code);
    const homephone=await createAccountDetails.setHomePhone(EmailData.homePhone);
    const mobPhone=await createAccountDetails.setMobilePhone(EmailData.mobilePhone);
    const aliasAdd=await createAccountDetails.aliasName(EmailData.myAddressAlias);

    await createAccountDetails.clickOnRegisterButton();
    const welcomeMsg = await createAccountDetails.getWelcomeMessage();
          expect(welcomeMsg).toBe("Welcome to your account. Here you can manage all of your personal information and orders.");
   
  });
});
