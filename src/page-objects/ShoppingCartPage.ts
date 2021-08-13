import {element, by } from "protractor";


import * as helpers from '@helpers';
import { vsprintf } from "sprintf-js";

export class ShoppingCartPage {

    
    private productInCart = '//a[contains(@class,"product-name")][text()="%s"]';
    private removeFromCartButton = '//a[contains(@class,"product-name")][text()="%s"]//ancestor::*//table[@class="cart"]//td[contains(@class,"remove")]';



    /**
     * Checks if the product is successfully added to the cart
     * @param {string} productName - the name of the product to be checked if it was added to cart
     */
    async checkIfProductIsAddedToCart(productName: string) {
        const productAddedToCart = element(by.xpath(vsprintf(this.productInCart,productName as any)))
        await helpers.waitForElementToBeVisible(productAddedToCart);
    }


     /**
     * Removes product from cart
     * @param {string} productName - the name of the product to be removed from cart
     */
      async removeProductFromCart(productName: string) {
        const removeProductButton = element(by.xpath(vsprintf(this.removeFromCartButton,productName as any)));
        await helpers.waitForElementToBeClickable(removeProductButton);
        await helpers.clickOnElement(removeProductButton);
    }


     /**
     * Checks if the product is successfully removed to the cart
     * @param {string} productName - the name of the product to be checked if it was removed from cart
     */
    async checkIfProductIsRemovedFromCart(productName: string) {
        const productNameContainer = element(by.xpath(vsprintf(this.productInCart, productName as any)));
        await helpers.waitForElementToBeInvisible(productNameContainer);
    }

}




















