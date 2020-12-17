class EnterprisePage{
    get buttonContactSales(){
        return $('.btn-mktg-fluid.btn-outline-mktg-fluid.f5-mktg-fluid.Bump-link');
    }

    get inputContactName(){
        return $('#contact_request_name');
    }

    get inputContactOrganization(){
        return $('#contact_request_organization_name');
    }

    get inputContactEmaill(){
        return $('#contact_request_email');
    }

    get radioButtonOther(){
        return $('#contact_request_purpose_other');
    }

    get inputComents(){
        return $('#contact_request_comments')
    }

    setComents(value){
        this.inputComents.setValue(value)
    }

    clickRadioButtonOther(){
        this.radioButtonOther.click()
    }

    setContactEmail(value){
        this.inputContactEmaill.setValue(value)
    }

    setContactOrganization(value){
        this.inputContactOrganization.setValue(value)
    }

    setContactName(value){
        this.inputContactName.setValue(value)
    }

    clickButtonContactSales(){
        this.buttonContactSales.click()
    }
}

module.exports = new EnterprisePage()