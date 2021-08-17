import { browser } from 'protractor';
import 'jasmine';
import 'module-alias/register';

import pageObjectHandler from './page-objects/PageObjectHandler';

describe('Test for the nopCommerce app', () => {
    let handler: pageObjectHandler = null;

    beforeEach(async () => {
        await browser.restart();
        await browser.manage().window().maximize();
        handler = new pageObjectHandler();
        browser.ignoreSynchronization = true;
        await browser.get("https://demo.nopcommerce.com/");
    });

    it('User searches for an item, and then adds it to cart [search bar]', async () => {
        const productName = 'HTC One Mini Blue';
        await handler.homePage.enterTextInSearchStoreInputField(productName);
        await handler.homePage.clickOnSearchButton();
        await handler.productListingPage.checkIfTheProductIsSearchedSuccessfully(productName);
        await handler.productListingPage.clickOnAddToCartButton(productName);
        await handler.productListingPage.waitForProductAddedToCartNotificationToAppear();
        await handler.productListingPage.closeTheProductAddedToCartNotification();
        await handler.productListingPage.clickOnShoppingCartButton();
        await handler.shoppingCartPage.checkIfProductIsAddedToCart(productName);

    });

    it('User removes item from cart [search bar]', async () => {
        const productName = 'HTC One Mini Blue';
        await handler.homePage.enterTextInSearchStoreInputField(productName);
        await handler.homePage.clickOnSearchButton();
        await handler.productListingPage.checkIfTheProductIsSearchedSuccessfully(productName);
        await handler.productListingPage.clickOnAddToCartButton(productName);
        await handler.productListingPage.waitForProductAddedToCartNotificationToAppear();
        await handler.productListingPage.closeTheProductAddedToCartNotification();
        await handler.productListingPage.clickOnShoppingCartButton();
        await handler.shoppingCartPage.checkIfProductIsAddedToCart(productName);
        await handler.shoppingCartPage.removeProductFromCart(productName);
        await handler.shoppingCartPage.checkIfProductIsRemovedFromCart(productName);
    });


    it('User searches for an item, and then adds it to cart [electronics section]', async () => {
        const productName = 'HTC One Mini Blue';
        const topMenuSection = 'Electronics';
        const topMenuSectionSublistOption = 'Cell phones';
        await handler.homePage.hoverOverTopMenuSection(topMenuSection);
        await handler.homePage.clickOnMenuSectionSublistOption(topMenuSectionSublistOption);
        await handler.productListingPage.clickOnAddToCartButton(productName);
        await handler.productListingPage.waitForProductAddedToCartNotificationToAppear();
        await handler.productListingPage.closeTheProductAddedToCartNotification();
        await handler.productListingPage.clickOnShoppingCartButton();
        await handler.shoppingCartPage.checkIfProductIsAddedToCart(productName);
    });

    it('User removes item from cart [electronics section] ', async () => {
        const productName = 'HTC One Mini Blue';
        const topMenuSection = 'Electronics';
        const topMenuSectionSublistOption = 'Cell phones';
        await handler.homePage.hoverOverTopMenuSection(topMenuSection);
        await handler.homePage.clickOnMenuSectionSublistOption(topMenuSectionSublistOption);
        await handler.productListingPage.clickOnAddToCartButton(productName);
        await handler.productListingPage.waitForProductAddedToCartNotificationToAppear();
        await handler.productListingPage.closeTheProductAddedToCartNotification();
        await handler.productListingPage.clickOnShoppingCartButton();
        await handler.shoppingCartPage.checkIfProductIsAddedToCart(productName);
        await handler.shoppingCartPage.removeProductFromCart(productName);
        await handler.shoppingCartPage.checkIfProductIsRemovedFromCart(productName);

    });
});
