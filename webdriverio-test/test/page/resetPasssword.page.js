class ResetPasswordPage{
    get resetButton(){
        return $('.btn.btn-primary.btn-block')
    }

    get emailInput(){
        return $('#email_field')
    }

    get wrongMessages(){
        return $('.flash.flash-full.flash-error')
    }

    setEmailInput(value){
        this.emailInput.setValue(value);
    }

    clickResetButton(){
        this.resetButton.click();
    }
}

module.exports = new ResetPasswordPage()