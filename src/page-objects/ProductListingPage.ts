import { ElementFinder, element, by } from "protractor";


import * as helpers from '@helpers';
import { vsprintf } from "sprintf-js";

export class ProductListingPage {


    private productItem = '//h2[contains(@class,"product-title")]//a[text()="%s"]';
    private addToCartButton = '//h2[contains(@class,"product-title")]//a[text()="%s"]/ancestor::*[contains(@class,"details")]//button[text()="Add to cart"]'
    private productAddedToCartNotification: ElementFinder = element(by.id('bar-notification'));
    private productAddedToCartNotificationCloseIcon: ElementFinder = element(by.xpath('//div[@id="bar-notification"]//span')); 
    private shoppingCartButton: ElementFinder = element(by.id('topcartlink'));


    /**
     * Checks if the product that was searched, is successfully lisited in the search results
     * @param nameOfProduct - the name of the product searched
     */
    async checkIfTheProductIsSearchedSuccessfully(nameOfProduct: string) {
        const productItem = element(by.xpath(vsprintf(this.productItem, nameOfProduct as any)));
        await helpers.waitForElementToBeVisible(productItem);
    }

    /**
     * Adds product to cart
     * @param productToAddToCart - product to add to cart
     */
    async clickOnAddToCartButton(productToAddToCart: string) {
        const addToCartButton = element(by.xpath(vsprintf(this.addToCartButton, productToAddToCart as any)));
        await helpers.waitForElementToBeClickable(addToCartButton);
        await helpers.clickOnElement(addToCartButton);
    }

    /**
    * Waits for the "The product has been added to your cart" notification to appear 
    */
    async waitForProductAddedToCartNotificationToAppear() {
        await helpers.waitForElementToBeVisible(this.productAddedToCartNotification);
    }


    /**
    * Closes the "The product has been added to your cart" notification
    */
    async closeTheProductAddedToCartNotification() {
        await helpers.waitForElementToBeClickable(this.productAddedToCartNotificationCloseIcon);
        await helpers.clickOnElement(this.productAddedToCartNotificationCloseIcon);

    }

    /**
    * Clicks on the "Shooping cart" button, located on the top of the page
    */
    async clickOnShoppingCartButton() {
        await helpers.waitForElementToBeClickable(this.shoppingCartButton);
        await helpers.clickOnElement(this.shoppingCartButton);
    }

}
