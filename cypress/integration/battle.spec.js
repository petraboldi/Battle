describe("battle feature test", function () {
	beforeEach(function () {
		cy.visit("/");
	});
	//asserting page has correct content upon load
	it("shows a heading for the game", function () {
		cy.contains("Get ready to battle!");
	});
});
