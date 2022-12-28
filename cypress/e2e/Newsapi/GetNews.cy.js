///<reference types ="cypress"/>

it('Verify that the user can get the news', () => {
    cy.request({
        method: 'GET',
        url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=7b7c2274f58143ecbd607132aad6c061"
    }).then(response => {
        console.log(response.body.articles)
        // for(let i = 0; i < response.body.articles.length; i++){
        //     for(let data in response.body.articles[i]){
        //         expect(response.body.articles[i]).to.have.property(data)
        //     }
        // }
       
    })
})