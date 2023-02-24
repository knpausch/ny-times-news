describe('Detail view user flow', () => {
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

    it('Should display article detail\'s (title, image, date, author, abstract, section, and hyperlink)', () => {
        cy.get('h2').should('contain', 'How the U.S. Adopted a New Intelligence Playbook to Expose Russia’s War Plans')
        cy.get('.article-image').should('have.attr', 'src', 'https://static01.nyt.com/images/2023/02/23/multimedia/23dc-intel-01-jvwt/23dc-intel-01-jvwt-superJumbo.jpg')
        cy.get('h3').should('contain', 'Feb 23, 2023')
        cy.get('h4').should('contain', 'By Julian E. Barnes and Adam Entous')
        cy.get('p').eq(0).should('contain', 'Abstract: Bolder disclosures are part of a larger effort to stymie the Kremlin’s offensive in Ukraine and align support for Kyiv’s war effort in allied countries.')
        cy.get('h5').should('contain', 'Section: "us"')
        cy.get('p').eq(1).should('contain', 'Read Full Article:')
        cy.get('a').eq(1).should('have.attr', 'href', 'https://www.nytimes.com/2023/02/23/us/politics/intelligence-russia-us-ukraine-china.html')
    })

    it('Should navigate back home if user clicks home-button', () => {
        cy.get('button').click()

        cy.get('h1').should('contain', 'NY Times News')
        cy.get('.dropdown-menu').should('have.attr', 'name', 'section-types').should('be.visible')
        cy.get('.go-button').should('contain', 'Go').should('be.visible')
        cy.get('.reset-button').should('contain', 'Reset').should('be.visible')
        cy.get('h2').eq(0).should('contain', 'How the U.S. Adopted a New Intelligence Playbook to Expose Russia’s War Plans')
    })
})