class Battle {
	constructor() {
		this.player1 = [];
		this.player2 = [];
	}
	addPlayer(player1, player2){
		this.player1.push(player1.name)
		this.player1.push(player1.hitPoints)
		this.player2.push(player2.name)
		this.player2.push(player2.name)
	}
	startBattle(){
		return `Battle started between ${this.player1[0]} and ${this.player2[0]}!`
	}
}
module.exports = Battle;
