# Instructions

## Prerequisites
1. NodeJS - https://nodejs.org/en/
2. Latest Chrome
3. Protractor `npm install -g protractor`
4. Webdriver manager (Installed by Protractor) `webdriver-manager update`

## Project structure
`protractor.conf.js` - this is the configuration for Protractor and Jasmine  
`src` - this folder contains all of the relevant execution files and test suites
`src/helpers/helpers.ts` - this file contains all the helper methods related to locating and validating elements  
`src/page-objects/*.ts` - this folder contains all the page objects related to the app that contain the elements based on the page  
`src/app.e2e-spec.ts` - This file contains the scenarios, steps and assertions  


## Environment variables

### How to set env variables
Windows - `setx YOUR_VARIABLE "YOUR_VALUE"` or `set YOUR_VARIABLE "YOUR_VALUE"` 
Linux / OSX - `export YOUR_VARIABLE="YOUR_VALUE"` 

### Required variables
1. `NOPCOMMERCE_PAGE_URL` - Set this to the url of nopCommerce e.g (https://demo.nopcommerce.com/)

## How to run the tests
1. clone this repo
2. In a separate terminal start webdriver-manager `webdriver-manager start` // No need to do this if on Linux machine
3. `cd maestral-interview`  
4. `npm i`  
5. `npm test`
6. `npm i -g serve`
7. `serve allure-report` - navigate to localhost on the port displayed in the terminal output  


## Documentation
- https://www.protractortest.org
- https://jasmine.github.io
- https://www.chaijs.com
