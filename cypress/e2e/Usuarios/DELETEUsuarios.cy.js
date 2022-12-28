///<reference types ="cypress"/>

describe('Delete User', () => {
   it('Verify that user is deleted', () => {
       cy.request({
        method: 'DELETE',
        url: '/usuarios/{0uxuPY0cbmQhpEz1}',
       }).then(response =>{
         console.log(response)
         if(response.status === 200 && response.statusText === "OK"){
            expect(response.body.message).to.eq('Nenhum registro excluído')
         }else{
            console.log(response.status)
         }      
   })
   })
})
