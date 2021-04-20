class Player {
	constructor(name) {
		this.name = name;
		this.hitPoints = 100;
	}
	getName() {
		return this.name;
	}
	getHitPoints() {
		return this.hitPoints;
	}
}
module.exports = Player;
