class MainPage {

    get loginInput() {
        return $('#user_login');
    }

    get passwordInput() {
        return $('#user_password');
    }

    get emailInput() {
        return $('#user_email');
    }

    get submitButton() {
        return $('[type = "submit"]');
    }

    get footerSingUpBitton() {
        return $('.btn-mktg-fluid.btn-green-mktg-fluid.mr-2-fluid.mb-2-fluid.width-full.width-sm-auto')
    }

    get lable() {
        return $('[class="f4 mb-3"]');
    }

    get containWhy() {
        return $('//*[contains(text(),"Why GitHub?")]')
    }

    get containExplore() {
        return $('//summary[contains(text(),"Explore")]')
    }

    get containPricing() {
        return $('//summary[contains(text(),"Pricing")]')
    }

    get pricingPlans() {
        return $('.pb-2.lh-condensed-ultra.d-block.link-gray-dark.no-underline.h5.Bump-link--hover')
    }

    get buttonJoinFree() {
        return $('[data-ga-click="Sign up, click to sign up for account, ref_page:/pricing;ref_cta:Join for free;ref_loc:topcarousel"]')
    }

    get buttonExploreGitHub() {
        return $('[href="/explore"]')
    }

    get buttonTopics() {
        return $('[href="/topics"][class="js-selected-navigation-item d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link"]')
    }

    get lableTopics() {
        return $('.h0-mktg')
    }

   get buttonCareers(){
       return $('[data-ga-click="Footer, go to careers, text:careers"]');
   }

   clickCareers(){
       this.buttonCareers.click();
   }

    clickButtonTopics() {
        this.buttonTopics.click()
    }

    clickExploreGitHub() {
        this.buttonExploreGitHub.click();
    }

    clickButtonJoinFree() {
        this.buttonJoinFree.click();
    }

    clickPlansButton() {
        this.pricingPlans.click();
    }

    clickPricingButton() {
        this.containPricing.click();
    }

    clickFooterSingUpButton() {
        this.footerSingUpBitton.click();
    }

    lableIsDisplayd() {
        this.lable.isDisplayed();
    }

    clickSubmitButton() {
        this.submitButton.click();
    }

    setLoginInput(value) {
        this.loginInput.setValue(value);
    }

    setPasswordInput(value) {
        this.passwordInput.setValue(value);
    }

    setEmailInput(value) {
        this.emailInput.setValue(value);
    }


}

module.exports = new MainPage()