describe("battle feature test", function () {
	beforeEach(function () {
		cy.visit("/");
	});
	//asserting page has correct content upon load
	it("shows a heading for the game", function () {
		cy.contains("Get ready to battle!");
	});
		it("shows an input field for providing names", function () {
		cy.get('#first-player').type('Marie')
		cy.get('#second-player').type('Petra')
		cy.get('#submit-button').click()
		cy.contains('The first player is Marie!')
		cy.contains('The second player is Petra!')
	});

});
