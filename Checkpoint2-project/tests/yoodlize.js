var pageObjects = {}
let navCat= require('../pageAssets/navCatAssets')
module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.yoodlizePO()
        pageObjects.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Navigate Categories': browser => {
        pageObjects
        .navCat(navCat)
    },
   
    // 'Search is available on all pages': browser => {
    //     pageObjects
    //         .waitForElementVisible('@navSearch')
    //         .verify.containsText('@navSearch', 'Search')
    //     pageObjects
    //         .click('@navWorks')
    //         .waitForElementVisible('@navSearch')
    //         .verify.containsText('@navSearch', 'Search')
    //     pageObjects
    //         .click('@navSearch')
    //         .waitForElementVisible('@navSearch')
    //         .verify.containsText('@navSearch', 'Search')
    //     pageObjects
    //         .useXpath()
    //         .click('//*[text()="List an Item"]')
    //         .useCss()
    //         .waitForElementVisible('@navSearch')
    //         .verify.containsText('@navSearch', 'Search')
    //     pageObjects
    //         .useXpath()
    //         .click('//*[text()="Terms"]')
    //         .useCss()
    //         .waitForElementVisible('@navSearch')
    //         .verify.containsText('@navSearch', 'Search')
    //     pageObjects
    //         .useXpath()
    //         .click('//*[text()="Privacy"]')
    //         .useCss()
    //         .waitForElementVisible('@navSearch')
    //         .verify.containsText('@navSearch', 'Search')
    //     pageObjects
    //         .logIn('testing.yoodlize1@gmail.com')
    //         .useXpath() 
    //         .click('//*[text()="List Your Stuff"]')
    //         .useCss()
    //         .waitForElementVisible('@navSearch')
    //         .verify.containsText('@navSearch', 'Search')
    //         pageObjects
    //         .useXpath()
    //         .click('//*[text()="Inbox"]')
    //         .useCss()
    //         .waitForElementVisible('@navSearch')
    //         .verify.containsText('@navSearch', 'Search')
    //         pageObjects
    //         .useXpath()
    //         .click('(//*[text()="My Listings"])[2]')
    //         .useCss()
    //         .waitForElementVisible('@navSearch')
    //         .verify.containsText('@navSearch', 'Search')
    //         pageObjects
    //         .useXpath()
    //         .click('(//*[text()="Reviews"])[2]')
    //         .useCss()
    //         .waitForElementVisible('@navSearch')
    //         .verify.containsText('@navSearch', 'Search')
    //         pageObjects
    //         .useXpath()
    //         .click('(//*[text()="Profile"])[1]')


    // }
}