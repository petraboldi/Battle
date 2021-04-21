describe("battle feature test", function () {
	// beforeEach(function () {
	// 	cy.visit("/");
	// });
	//asserting page has correct content upon load
	it("on load shows a heading for the game", function () {
		cy.visit("/");
		cy.contains("Welcome to battle!");
	});
	it("shows players names, hitpoints and start attack button on page", function () {
		cy.visit("/");
		cy.get("#first-player").type("Marie");
		cy.get("#second-player").type("Petra");
		cy.get("#submit-button").click();
		cy.contains("Marie, 100");
		cy.contains("Petra, 100");
		cy.get("#start-attack-button").should("be.visible");
		cy.url().should("include", "/players");
	});
});
