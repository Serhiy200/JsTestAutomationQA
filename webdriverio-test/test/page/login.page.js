class LoginPage{
    get loginInput(){
        return $('#login_field');
    }

    get paswwordInput(){
        return $('#password')
    }

    get loginButton(){
        return $('.btn.btn-primary.btn-block')
    }

    get forgotButton(){
        return $('.label-link')
    }

    clickForgotButton(){
        this.forgotButton.click();
    }

    setloginInput(value){
        this.loginInput.setValue(value);
    }

    setPasswordInput(value){
        this.paswwordInput.setValue(value);
    }

    clickLoginButton(){
        this.loginButton.click();
    }
}

module.exports = new LoginPage();