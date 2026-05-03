import { expect } from '@playwright/test';

class BasePage{
    constructor(page){
        this.page = page;
    }

    async openLink(link){
        await this.page.goto("http://34.141.58.52:8080/#/");
    }

    async checkPageURL(URL){
        await expect(this.page).toHaveURL(URL);
    }
}

module.exports = BasePage;