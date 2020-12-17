class Search{
    get inputSerch(){
        return $('[type="text"]')
    }

    get buttonAllGitHub(){
        return $('[class="js-jump-to-badge-search-text-global"][aria-label="in all of GitHub"]')
    }

    get searchTypeScript(){
        return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]')
    }

    get firstLink(){
        return $('.repo-list .repo-list-item.hx_hit-repo.d-flex.flex-justify-start.py-4.public.source:nth-child(1) div.mt-n1 div.f4.text-normal a')
    }

    checkAbleTextInUrl(text){
        expect(browser).toHaveUrlContaining(text)
    }

    clickFirstLink(){
        this.firstLink.click();
    }

    clickSearhTypeScript(){
        this.searchTypeScript.click();
    }

    clickButtonAllGit(){
        this.buttonAllGitHub.click();
    }

    setInputSearch(value){
        this.inputSerch.setValue(value);
    }

}

module.exports = new Search()