class CareersPage {
    get linkPosition() {
        return $('.f3-light.d-inline-block.mr-5.js-smoothscroll-anchor');
    }

    get manyList() {
        return $('.pb-md-6')
    }

    get list() {
        return $$('div.Details.js-details-container')
    }

    get textFromList() {
        return $(' div button h3.float-left.h3-mktg.text-normal.py-4')
    }

    get Positions() {
        return $('float-left h3-mktg text-normal py-4')
    }

    getElementOfList() {
        this.list
    }

    clickLinkPosition() {
        this.linkPosition.click();
    }
}

module.exports = new CareersPage()