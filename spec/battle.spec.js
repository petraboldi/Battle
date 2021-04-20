const Battle = require("../src/battle.js");
const Player = require("../src/player.js");

describe("battle unit tests ", () => {
	it("expecting two players to be added to battle game", () => {
		let Player1 = new Player("Marie");
		let Player2 = new Player("Petra");
		let Battle1 = new Battle();
		let BattlePlayers = Battle1.addPlayer(Player1, Player2);
		expect(BattlePlayers).toBe(["Marie", "Petra"]);
	});
	it("expecting battle to begin", () => {
		let Player1 = new Player("Marie");
		let Player2 = new Player("Petra");
		let Battle2 = new Battle();
		Battle2.addPlayer(Player1, Player2);
		let BattleBegin = Battle1.startBattle();
		expect(BattleBegin).toBe("Battle started between Marie and Petra");
	});
});
