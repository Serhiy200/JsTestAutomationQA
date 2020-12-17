const { mainModule } = require('process')
const mainPage = require('../page/main.page.js')
const loginPage = require('../page/login.page.js')
const accountPage = require('../page/accaount.page.js')
const resetPasswordPage = require('../page/resetPasssword.page.js')
const emailPage = require('../page/email.page.js')
const search = require('../page/search.js')
const enterprisePage = require('../page/enterprise.page.js')
const careersPage = require('../page/careers.page.js')
const resetPassswordPage = require('../page/resetPasssword.page.js')


describe('webdriver.io page', () => {
    it('enter email and password', () => {
        browser.url('https://github.com/')

        mainPage.setEmailInput(getEmail())
        browser.pause(3000);

        mainPage.clickSubmitButton()

        mainPage.setLoginInput(getRandomStr(rand(5, 8)))

        mainPage.setPasswordInput(getRandomStr(8))
        browser.pause(3000);

        const url = browser.getUrl();

        console.log('Some url' + url)

        expect(browser).toHaveUrl('https://github.com/join');
        console.log("Is lable is visible: " + mainPage.lableIsDisplayd())
    })

    it('sing up footer', () => {
        browser.url('https://github.com/')
        mainPage.footerSingUpBitton.scrollIntoView();
        mainPage.clickFooterSingUpButton();


        mainPage.setEmailInput(getEmail())
        browser.pause(3000);

        mainPage.setLoginInput(getRandomStr(rand(5, 8)))

        mainPage.setPasswordInput(getRandomStr(8))
        browser.pause(3000);

        const url = browser.getUrl();

        console.log('Some url' + url)

        expect(browser).toHaveUrl('https://github.com/join?ref_cta=Sign+up+for+GitHub&ref_loc=footer+launchpad&ref_page=%2F');

        console.log("Is lable is visible: " + mainPage.lableIsDisplayd())
    })

    it('login test', () => {
        browser.url('https://github.com/login')

        loginPage.setloginInput('Testaccount253')
        loginPage.setPasswordInput('ZxC69852')

        loginPage.clickLoginButton();
        browser.pause(2000)

        accountPage.clickViewProfile()
        browser.pause(2000)
        accountPage.clickLableName();
        browser.pause(2000)
        console.log('This ' + accountPage.userName.getText())


        expect(accountPage.userName).toHaveText('Testaccount253')



        expect(browser).toHaveUrl('https://github.com/Testaccount253');

        accountPage.clickViewProfile()
        browser.pause(2000)
        accountPage.clickSingOut();
        browser.pause(2000)

    })

    it('forgot password', () => {
        browser.url('https://github.com/login')
        browser.pause(2000);
        loginPage.clickForgotButton();
        browser.pause(2000)
        resetPasswordPage.clickResetButton();
        expect(resetPassswordPage.wrongMessages).toBeVisibleInViewport()
        browser.pause(2000)

        resetPasswordPage.setEmailInput(getRandomStr(rand(5, 8)))
        resetPasswordPage.clickResetButton();
        expect(resetPassswordPage.wrongMessages).toBeVisibleInViewport()
        browser.pause(2000)

        resetPasswordPage.setEmailInput(getEmail())

        resetPasswordPage.clickResetButton();
        expect(resetPassswordPage.wrongMessages).toBeVisibleInViewport()
        browser.pause(2000)

        resetPasswordPage.setEmailInput('sergsj_gusak@ukr.net')
        resetPasswordPage.clickResetButton();
        console.log('Messages has sent')
        browser.pause(2000)
    })

    it('Should check if letter arived to email', () => {
        browser.newWindow('https://mail.ukr.net/desktop#msglist/f0/p0')
        browser.pause(5000)

        emailPage.setEmail('sergsj_gusak@ukr.net')
        emailPage.setPassword('QwE25896')
        emailPage.clickSingIn()

        browser.pause(5000)

      

        expect(emailPage.letter).toBeDisplayed()
        
    })

    it('Should check if element is displayed', () => {
        browser.url('https://github.com/')

        console.log("Why GitHub is displayed: " + expect(mainPage.containWhy).toBeDisplayed())
        console.log("Explore is displayed: " + expect(mainPage.containPricing).toBeDisplayed())
        console.log("Pricing is displayed: " + expect(mainPage.containExplore).toBeDisplayed())
        browser.pause(5000)
    })

    it('Should check if plans registr', () => {
        browser.url('https://github.com/')

        mainPage.containPricing.moveTo();
        mainPage.containPricing.click();
        browser.pause(2000)

        mainPage.clickPlansButton();


        mainPage.clickButtonJoinFree();

        mainPage.setLoginInput(getRandomStr(rand(5, 8)));
        mainPage.setEmailInput(getEmail());
        mainPage.setPasswordInput(getRandomStr(8))

    })

    it('should detect some links', () => {
        browser.url('https://github.com/')
        mainPage.containExplore.moveTo();
       // mainPage.containExplore.click()
        browser.pause(2000)

        mainPage.clickExploreGitHub();
        browser.pause(2000)

        mainPage.clickButtonTopics();
        browser.pause(2000)

        expect(mainPage.lableTopics).toHaveText('Topics')

    })

    it('should check search', () => {

        search.setInputSearch('webdriverio')
        browser.pause(2000)

        search.clickButtonAllGit();
        browser.pause(2000)

        search.clickSearhTypeScript();
        browser.pause(2000)
        console.log('search ')
        search.firstLink.click();
        browser.pause(2000)

        search.checkAbleTextInUrl('webdriverio')
    })

    it('should check contact sales', () => {
        browser.url('https://github.com/')

        enterprisePage.clickButtonContactSales()

        enterprisePage.setContactName(getRandomStr(rand(5, 9)))
        enterprisePage.setContactOrganization(getRandomStr(rand(5, 9)))
        enterprisePage.setContactEmail(getEmail())
        browser.pause(2000)

        enterprisePage.clickRadioButtonOther()

        enterprisePage.setComents(getRandomStr(50))

        browser.pause(2000)
        browser.back();
        browser.pause(2000)
    })

    it('Should check careers', () => {
        browser.url('https://github.com/about/careers')
        mainPage.clickCareers()

        careersPage.clickLinkPosition()

        for (const type of careersPage.list) {
            console.log(`Some text ${type.getText()}`)
        }
    })

})



var endings = ["mail.ru", "list.ru", "rambler.ru", "yandex.ru", "gmail.com"],
    symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";

function rand(min, max) {
    return (min + Math.random() * (max - min + 1)) | 0
}

function getRandomStr(len) {
    var ret = ""
    for (var i = 0; i < len; i++)
        console.log(ret += symbols[rand(0, symbols.length - 1)]);
    return ret;
}

function getEmail() {
    var a = getRandomStr(rand(3, 5)),
        b = getRandomStr(rand(3, 5));
    return a + "." + b + "@" + endings[rand(0, endings.length - 1)];
}