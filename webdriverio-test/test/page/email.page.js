class EmailPage{
    get inputEmail(){
        return $('#id-l')
    }

    get inputPassword(){
        return $('#id-p')
    }

    get loginButton(){
        return $('.button.button_style-main.button_size-regular.form__submit')
    }

    get letter(){
        return $('.msglist__row.unread.icon0.ui-draggable td a.msglist__row-address-name[data-name="GitHub"]');
    }

    letterIsDisplayed(){
        this.letter.isDisplayed();
    }

    setEmail(value){
        this.inputEmail.setValue(value)
    }

    setPassword(value){
        this.inputPassword.setValue(value)
    }

    clickSingIn(){
        this.loginButton.click();
    }
}

module.exports = new EmailPage()