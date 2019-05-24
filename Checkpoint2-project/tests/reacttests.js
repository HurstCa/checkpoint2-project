var reactpg

module.exports = {
    beforeEach: browser => {
        reactpg = browser.page.react()
        reactpg.navigate()
    },

    after: browser => {
        browser.end()

    },
    'Evens and Odds': browser => {
        reactpg
        .waitForElementVisible('@eo')
        .setValue('@eo', '6,2,3,4,9')
        .click('@split')
        .expect.element('@evens').text.to.equal('Evens: [6,2,4]')
        reactpg
        .expect.element('@odds').text.to.equal('Odds: [3,9]')
        reactpg
        .clearValue('@eo')
        .setValue('@eo', 'I like pie')
        .click('@split')
        .expect.element('@odds').text.to.equal('Odds: [null]')
    },
    'Filter Objects': browser => {
        reactpg
        .setValue('@fo', 'title')
        .click('@filtero')
        .verify.containsText('@filteredo', 'title')
        .clearValue('@fo')
        .setValue('@fo', 'chicken')
        .click('@filtero')
        .expect.element('@filteredo').text.to.equal('Filtered: []')
    },
    'Filter String': browser => {
        reactpg
        .setValue('@fs', 'James')
        .click('@filters')
        .expect.element('@filtereds').text.to.equal('Filtered Names: [ "James" ]')
        reactpg
        .clearValue('@fs')
        .setValue('@fs', 'Bob')
        .click('@filters')
        .expect.element('@filtereds').text.to.equal('Filtered Names: []')
    },
    'Palindrome': browser => {
        reactpg
        .setValue('@pd', 'racecar')
        .click('@check')
        .expect.element('@palindrome').text.to.equal('Palindrome: true')
        reactpg
        .clearValue('@pd')
        .setValue('@pd', 'lucky')
        .click('@check')
        .expect.element('@palindrome').text.to.equal('Palindrome: false')
    },
    'Sum': browser => {
        reactpg
        .setValue('@sm1', '6')
        .setValue('@sm2', '2')
        .click('@add')
        .expect.element('@sum').text.to.contain('Sum: 8')
    }
}