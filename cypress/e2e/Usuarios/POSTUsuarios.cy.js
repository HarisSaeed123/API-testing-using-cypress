///<reference types="cypress"/>
import {faker} from "@faker-js/faker"
let user;
describe('Given a user api', () => {
    beforeEach('', () => {
        user = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: "true"
        }
    })
    it('Verify that the user is created successfully', () => {
        cy.request({
            method: 'POST',
            url : '/usuarios',
            body: user
        }).then(response => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        })
    })
})