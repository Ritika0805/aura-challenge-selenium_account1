
class createAccountConstant{
    get attributes(){
        return{
            mrTitle:"uniform-id_gender1",
            mrsTitle:"uniform-id_gender2",

            custFirstName:"customer_firstname",
            custLastName:"customer_lastname",
            email:"email",
            password:"passwd",
            dobDay:"days",
            dobMonth:"months",
            dobYears:"years",
            firstName:"firstname",
            lastName:"lastname",
            company:"company",
            address:"address1",
            address2:"address2",
            city:"city",
            state:"id_state",
            postCode:"postcode",
            country:"id_country",
            homephone:"phone",
            mobilePhone:"phone_mobile",
            aliasAddress:"alias",
            registerButton:"button[id='submitAccount'] span",
            welcomeMessage:'//p[@class="info-account"]',
            titleMyAcc:'//title',
            signout:'//a[@title="Log me out"]'
        }
    }
}

module.exports = new createAccountConstant();