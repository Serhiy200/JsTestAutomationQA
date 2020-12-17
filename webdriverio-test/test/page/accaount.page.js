class AccountPage{
    get lableName(){
        return $('strong.css-truncate-target')
    }

    get userName(){
        return $('.p-nickname.vcard-username.d-block')
    }

    get viewProfile(){
        return $('[aria-label="View profile and more"]')
    }

    get singOut(){
        return $('.dropdown-item.dropdown-signout')
    }

    clickSingOut(){
        this.singOut.click();
    }

    clickViewProfile(){
        this.viewProfile.click();
    }

    getTextUserName(){
        this.userName.getText()
    }

    clickLableName(){
        this.lableName.click()
    }
}

module.exports = new AccountPage()