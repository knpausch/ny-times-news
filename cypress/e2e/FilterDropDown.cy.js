describe('Filter dropdown menu user flow', () => {
    beforeEach(() => {
        cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hJ0FcCaJDYmhdMWUGZW8WtEDnv3AGhsy', {
            method: 'GET',
            fixture: 'threeArticles.json'
        })
        cy.visit('http://localhost:3000/')
    })

    it('Should display world in dropdown menu when user selects "world"', () => {
        cy.get('.dropdown-menu').select("world")
    })

    it('Should filter "world" articles when user selects "Go" button after selecting "world" dropdown', () => {
        cy.get('.dropdown-menu').select("world")
        cy.get('.go-button').click()

        cy.get('h2').eq(0).should('contain', 'The West Tried to Isolate Russia. It Didn’t Work.')
        cy.get('h2').eq(1).should('contain', 'Prigozhin’s Feud With Russia’s Military Leaves Questions About Battlefield Results')
    })

    it('Should reset to all articles when user clicks "Reset" after filtering out a section', () => {
        cy.get('.dropdown-menu').select("world")
        cy.get('.go-button').click()
        cy.get('.reset-button').click()

        cy.get('h2').eq(0).should('contain', 'How the U.S. Adopted a New Intelligence Playbook to Expose Russia’s War Plans')
        cy.get('h2').eq(1).should('contain', 'The West Tried to Isolate Russia. It Didn’t Work.')
        cy.get('h2').eq(2).should('contain', 'Prigozhin’s Feud With Russia’s Military Leaves Questions About Battlefield Results')
    })

    it('Should display "no articles found" when user selects "art" in dropdown menu and selects "go"', () => {
        cy.get('.dropdown-menu').select("arts")
        cy.get('.go-button').click()
        
        cy.get('h2').should('contain', 'No Articles Found')
    })
})