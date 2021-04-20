const Player = require("../src/player.js");

describe("Player unit tests ", () => {
	it("expecting player's name to be returned from getName()", () => {
		let player1 = new Player("Marie");
		let playerName = player1.getName();
		expect(playerName).toBe("Marie");
	});
	it("expecting player's hit points to be returned from getHitPoints()", () => {
		let player2 = new Player("Marie");
		let player2HitPoints = player2.getHitPoints();
		expect(player2HitPoints).toBe(100);
	});
});
