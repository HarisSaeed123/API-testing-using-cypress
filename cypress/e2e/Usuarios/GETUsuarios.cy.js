///<reference types="cypress"/>
describe('Given the Users api', () => {
   it('Then it should return a list with all registered user', () => {
      cy.request({
         failOnStatusCode: false,
         method: 'GET',
         url: '/usuarios'
      }).then(response => {
         // expect(response.body.quantidade).to.eq(5)
         expect(response.body.quantidade).to.eq(response.body.usuarios.length)
         // Cypress loadash provide each function to iterate the array
         Cypress._.each((response.body.usuarios), usuarios => {
            expect(usuarios.email).to.not.be.null
            expect(usuarios).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
         })
      })
   });
   it('Filter user by id', () => {
      cy.request({
         failOnStatusCode: false,
         method: 'GET',
         url: '/usuarios',
         qs: {
            _id: '0uxuPY0cbmQhpEz1'
         }
      }).then(response => {
         expect(response.status).to.eq(200)
         expect(response.body.usuarios[0].nome).to.eq('Fulano da Silva')
      })
   })
})
