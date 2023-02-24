describe('Detail view page flow', () => {
    beforeEach(() => {
        cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hJ0FcCaJDYmhdMWUGZW8WtEDnv3AGhsy', {
            method: 'GET',
            fixture: 'threeArticles.json'
        })
        cy.visit('http://localhost:3000/')
        cy.get('h2').eq(0).click()

    })

    it('Should display header title and home-button', () => {
        cy.get('h1').should('contain', 'NY Times News')
        cy.get('button').should('contain', 'Home').should('be.visible')
    })
})