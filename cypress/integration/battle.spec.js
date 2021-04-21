describe("battle feature test", function () {
	// beforeEach(function () {
	// 	cy.visit("/");
	// });
	//asserting page has correct content upon load
	it("on load shows a heading for the game", function () {
		cy.visit("/");
		cy.contains("Welcome to Battle!");
	});
	it("shows players names, hitpoints and start attack button on page", function () {
		cy.visit("/");
		cy.get("#first-player").type("Marie");
		cy.get("#second-player").type("Petra");
		cy.get("#submit-button").click();
		cy.contains("The first player is Marie. Total hitpoints: 100");
		cy.contains("The second player is Petra. Total hitpoints: 100");
		cy.get("#start-attack-button").should("be.visible");
		// cy.url().should("include", "/players");
	});
		it("First attack happened", function () {
		cy.visit("/");
		cy.get("#first-player").type("Marie");
		cy.get("#second-player").type("Petra");
		cy.get("#submit-button").click();
		cy.contains("The first player is Marie. Total hitpoints: 100");
		cy.contains("The second player is Petra. Total hitpoints: 100");
		cy.get("#start-attack-button").should("be.visible");
		cy.get("#start-attack-button").click();
		cy.url().should("include", "/attack");
		cy.contains("Marie: 100 Petra :90");

	});

		it("Second player's turn", function () {
		cy.visit("/");
		cy.get("#first-player").type("Marie");
		cy.get("#second-player").type("Petra");
		cy.get("#submit-button").click();
		cy.contains("The first player is Marie. Total hitpoints: 100");
		cy.contains("The second player is Petra. Total hitpoints: 100");
		cy.get("#start-attack-button").should("be.visible");
		cy.get("#start-attack-button").click();
		cy.url().should("include", "/attack");
		cy.contains("Marie: 100 Petra :90");
		cy.get("#turn-button").click();
		cy.contains("The first player is Petra. Total hitpoints: 90");
		cy.contains("The second player is Marie. Total hitpoints: 100");
	});
});
