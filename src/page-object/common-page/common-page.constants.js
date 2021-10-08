

class CommonConstant {
    get commonData() {
        return {
            url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
            defaultTimeout: 45000,
            implicitWaitDefaultTimeout: 30000            
        }
    }

    get attributes(){
        return{
            signInLinkButton:"a[class='login']",
            createAccountHeader:"form#create-account_form h3",
            emailTextBox:"input#email_create",
            submitButton:"button#SubmitCreate",
            errorSpan:"div#create_account_error li"
        }
    }

    get timeouts() {
        return {
            xs: 5000,
            s: 10000,
        }
    }

}

module.exports = new CommonConstant();