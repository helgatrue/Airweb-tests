describe('Visual Capturing Suite', ()=> {
    it('should compare screenshot of the entire page',  () => {
        // cy.visit('https://eboutique.irigo.fr/')
        cy.visit('https://is.sso.prod.instant-system.com/auth/realms/78/protocol/openid-connect/auth?client_id=ext-airweb&redirect_uri=https%3A%2F%2Feboutique.irigo.fr%2Fauth%2Fcustom&scope=openid+address+phone&response_type=code&response_mode=query&code_challenge_method=S256&code_challenge=9-LKsyH4Xd41g0RxbbC3tYr3sNL5zrI_1uFauSa3FZ0')
        cy.compareSnapshot('register')
    });
})

describe('Visual Capturing Suite', ()=> {
    it('should compare screenshot of the entire page',  () => {
        // cy.visit('https://google.com/')
        cy.visit('https://eboutique.irigo.fr/')
        cy.compareSnapshot('alert')
    });
})