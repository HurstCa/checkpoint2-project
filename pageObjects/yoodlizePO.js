var yoodlizeCommands = {
    logIn: function(email){
        this
        .api.useXpath()
        .waitForElementVisible('//span[text()="Log in"]')
        .click('//span[text()="Log in"]')
        this.api.useCss()
        .waitForElementVisible('[name=email]')
        .setValue('[name="email"]', email)
        .setValue('[name="password"]', 'yoodlizetesting')
        .click('[type=submit]')
        this.api.useXpath()
        .waitForElementVisible('//span[text()="Inbox"]')
        this.api.useCss()
        return this
    },
    navCat: function(testData){
        testData.forEach(test => {
            this
            .click(test.selector)
            .pause(500)
            .useCss()
            .waitForElementVisible('.sc-kaNhvL')
            .verify.containsText('.sc-kaNhvL', test.category)
        this
            .waitForElementVisible('.navbar-brand')
            .click('.navbar-brand')
        })
        this
        return this
    },
    
}

module.exports = {
    url: 'https://alpha.yoodlize.com/',
    commands: [yoodlizeCommands],
    elements: {
        sAllTools: {
            selector: '(//div[text()="See all"])[1]',
            locateStrategy: 'xpath'
        },
        sAllOutdoor: {
            selector: '(//div[text()="See all"])[2]',
            locateStrategy: 'xpath'
        },
        sAllElectronics: {
            selector: '(//div[text()="See all"])[3]',
            locateStrategy: 'xpath'
        },
        sAllParty: {
            selector: '(//div[text()="See all"])[4]',
            locateStrategy: 'xpath'
        },
        sAllVehicles: {
            selector: '(//div[text()="See all"])[5]',
            locateStrategy: 'xpath'
        },
        sAllClothing: {
            selector: '(//div[text()="See all"])[6]',
            locateStrategy: 'xpath'
        },
        sAllHome: {
            selector: '(//div[text()="See all"])[7]',
            locateStrategy: 'xpath'
        },
        sAllToys: {
            selector: '(//div[text()="See all"])[8]',
            locateStrategy: 'xpath'
        },
        sAllLawn: {
            selector: '(//div[text()="See all"])[9]',
            locateStrategy: 'xpath'
        },
        sAllSporting: {
            selector: '(//div[text()="See all"])[10]',
            locateStrategy: 'xpath'
        },
        sAllBusiness: {
            selector: '(//div[text()="See all"])[11]',
            locateStrategy: 'xpath'
        },
        sAllVenues: {
            selector: '(//div[text()="See all"])[12]',
            locateStrategy: 'xpath'
        },
        sAllExperts: {
            selector: '(//div[text()="See all"])[13]',
            locateStrategy: 'xpath'
        },
        sAllExperiences: {
            selector: '(//div[text()="See all"])[14]',
            locateStrategy: 'xpath'
        },
        sAllMisc: {
            selector: '(//div[text()="See all"])[15]',
            locateStrategy: 'xpath'
        },
        fTools: {
            selector: '(//div[text()="TOOLS"])[2]',
            locateStrategy: 'xpath'
        },
        fOutdoor: {
            selector: '(//div[text()="OUTDOOR GEAR"])[2]',
            locateStrategy: 'xpath'
        },
        fElectronics: {
            selector: '(//div[text()="ELECTRONICS"])[2]',
            locateStrategy: 'xpath'
        },
        fParty: {
            selector: '(//div[text()="PARTY & WEDDING EQUIPMENT"])[2]',
            locateStrategy: 'xpath'
        },
        fVehicles: {
            selector: '(//div[text()="RECREATIONAL VEHICLES"])[2]',
            locateStrategy: 'xpath'
        },
        fClothing: {
            selector: '(//div[text()="CLOTHING"])[2]',
            locateStrategy: 'xpath'
        },
        fHome: {
            selector: '(//div[text()="HOME AND KITCHEN"])',
            locateStrategy: 'xpath'
        },
        fToys: {
            selector: '(//div[text()="TOYS AND GAMES"])',
            locateStrategy: 'xpath'
        },
        fLawn: {
            selector: '(//div[text()="LAWN AND GARDEN"])',
            locateStrategy: 'xpath'
        },
        fSporting: {
            selector: '(//div[text()="SPORTING GOODS"])[2]',
            locateStrategy: 'xpath'
        },
        fBusiness: {
            selector: '(//div[text()="BUSINESS EQUIPMENT"])[2]',
            locateStrategy: 'xpath'
        },
        fVenues: {
            selector: '(//div[text()="VENUES"])[2]',
            locateStrategy: 'xpath'
        },
        fExperts: {
            selector: '(//div[text()="LOCAL EXPERTS"])[2]',
            locateStrategy: 'xpath'
        },
        fExperiences: {
            selector: '(//div[text()="EXPERIENCES"])[2]',
            locateStrategy: 'xpath'
        },
        fMisc: {
            selector: '(//div[text()="MISC"])[2]',
            locateStrategy: 'xpath'
        },
        navSearch: {
            selector: '//*[text()="Search"]',
            locateStrategy: 'xpath'
                    },
        navWorks: {
            selector:'//*[text()="How it works"]',
            locateStrategy: 'xpath'
        },

    },
}
