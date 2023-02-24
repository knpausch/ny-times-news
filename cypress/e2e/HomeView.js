describe('Home view page flow', () => {
    beforeEach(() => {
        cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hJ0FcCaJDYmhdMWUGZW8WtEDnv3AGhsy', {
            method: 'GET',
            fixture: '../fixures/threeArticles.json'
        })
        cy.visit('http://localhost:3000/')
    })

    it('Should assert true is true', () => {
        expect(true).to.equal(true)
    })
})