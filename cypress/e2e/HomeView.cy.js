describe('Home view page flow', () => {
    beforeEach(() => {
        cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hJ0FcCaJDYmhdMWUGZW8WtEDnv3AGhsy', {
            method: 'GET',
            fixture: 'threeArticles.json'
        })
        cy.visit('http://localhost:3000/')
    })

    it('Should display header title, dropdown menu, go-button, reset-button, and 3 article titles', () => {
        cy.get('h1').should('contain', 'NY Times News')
        cy.get('.dropdown-menu').should('have.attr', 'name', 'section-types').should('be.visible')
        cy.get('.go-button').should('contain', 'Go').should('be.visible')
        cy.get('.reset-button').should('contain', 'Reset').should('be.visible')
        cy.get('h2').eq(0).should('contain', 'How the U.S. Adopted a New Intelligence Playbook to Expose Russia’s War Plans')
        cy.get('h2').eq(1).should('contain', 'The West Tried to Isolate Russia. It Didn’t Work.')
        cy.get('h2').eq(2).should('contain', 'Prigozhin’s Feud With Russia’s Military Leaves Questions About Battlefield Results')
    })
})