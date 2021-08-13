import { ElementFinder, element, by } from "protractor";


import * as helpers from '@helpers';
import { vsprintf } from "sprintf-js";

export class HomePage {

    private searchStoreInputField: ElementFinder = element(by.id('small-searchterms'));
    private searchButton: ElementFinder = element(by.xpath('//button[text()="Search"]'));
    private topMenuSection = '//div[contains(@class,"header-menu")]//ul[contains(@class,"notmobile")]//a[contains(text(),"%s")]';
    private topMenuSectionSublistOption = '//div[contains(@class,"header-menu")]//ul[contains(@class,"notmobile")]//a[contains(text(),"%s")]';


    /**
     * Searches for an product in the store
     * @param item - the name of the product to search
     */
    public async enterTextInSearchStoreInputField(item: string) {
        await helpers.waitForElementToBeVisible(this.searchStoreInputField);
        await helpers.enterTextInField(this.searchStoreInputField,item);
    }

    /**
     * Clicks on the "SEARCH" button, to search for the entered item
     */
    async clickOnSearchButton() {
        await helpers.waitForElementToBeClickable(this.searchButton);
        await helpers.clickOnElement(this.searchButton);
    }

     /**
     * Hovers over top menu section
     * @param {string} nameOfSection - name of the section to hover over
     */
    async hoverOverTopMenuSection(nameOfSection: string) {
        const section = element(by.xpath(vsprintf(this.topMenuSection, nameOfSection as any)));
        await helpers.waitForElementToBeVisible(section);
        await helpers.hoverOverElement(section);

    }

    /**
     * Clicks on some sublist option, that is present when clicking on some top menu section
     * @param {string} nameOfOption - name of sublist option to click on
     */
     async clickOnMenuSectionSublistOption(nameOfOption: string) {
        const sublistOption = element(by.xpath(vsprintf(this.topMenuSectionSublistOption, nameOfOption as any)));
        await helpers.waitForElementToBeVisible(sublistOption);
        await helpers.clickOnElement(sublistOption);

    }

}
