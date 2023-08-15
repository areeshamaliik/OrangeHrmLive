describe.only("login into ornge hrm live",()=>
{
    it.only("using passwordand username",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[type="password"]').type("admin123")
    })
})