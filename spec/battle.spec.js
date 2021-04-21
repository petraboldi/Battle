const Battle = require("../src/battle.js");
const Player = require("../src/player.js");

describe("battle unit tests ", () => {
	it("expecting two players to be added to battle game", () => {
		let Player1 = new Player("Marie");
		let Player2 = new Player("Petra");
		let Battle1 = new Battle();
		Battle1.addPlayer(Player1, Player2);
		expect(Battle1.player1[0]).toBe("Marie");
	});
	it("expecting battle to begin", () => {
		let Player1 = new Player("Marie");
		let Player2 = new Player("Petra");
		let Battle2 = new Battle();
		Battle2.addPlayer(Player1, Player2);
		let BattleBegin = Battle2.startBattle();
		expect(BattleBegin).toBe("Battle started between Marie and Petra!");
	});
	it("expecting attack() to reduce other players hitpoints by 10", () => {
		let Player1 = new Player("Marie");
		let Player2 = new Player("Petra");
		let Battle2 = new Battle();
		Battle2.addPlayer(Player1, Player2);
		let BattleBegin = Battle2.startBattle();
		Battle2.attack(Player2);
		expect(Player2.hitPoints).toBe(90);
	});
});
