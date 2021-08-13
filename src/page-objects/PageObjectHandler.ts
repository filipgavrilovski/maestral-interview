import * as pages from '.';

export default class PageObjectHandler {

    public homePage: pages.HomePage;
    public productListingPage: pages.ProductListingPage;
    public shoppingCartPage: pages.ShoppingCartPage;

    constructor() {
        this.homePage = new pages.HomePage();
        this.productListingPage = new pages.ProductListingPage();
        this.shoppingCartPage = new pages.ShoppingCartPage();
    }
}
