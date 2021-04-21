const express = require("express");
const Battle = require("./src/battle");
const Player = require("./src/player");
const app = express();
const port = 3000;
const battle = new Battle();


app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.render("./index");
});

app.post("/", (req, res) => {
	const player1 = new Player(req.body.first_person_name)
	const player2 = new Player(req.body.second_person_name)
	battle.addPlayer(player1, player2);
	battle.players;

	res.render("./turn", {
		firstPersonName: player1.name,
		secondPersonName: player2.name,
		firstPersonHitPoints: player1.hitPoints,
		secondPersonHitPoints: player2.hitPoints,
	});
});
app.post('/attack',(req,res)=>{
	const player1 = new Player(req.body.first_person_name)
	const player2 = new Player(req.body.second_person_name)
	battle.attack(player2)
	res.render('./attack',{
		firstPersonName: battle.player1[0],
		secondPersonName: battle.player2[0],
		firstPersonHitPoints: player1.hitPoints,
		secondPersonHitPoints: player2.hitPoints,
	})
})


app.post('/attack',(req,res)=>{
	const player1 = new Player(req.body.first_person_name)
	const player2 = new Player(req.body.second_person_name)
	battle.reverse()
	res.render('./turn',{
		firstPersonName: battle.player1[0],
		secondPersonName: battle.player2[0],
		firstPersonHitPoints: player1.hitPoints,
		secondPersonHitPoints: player2.hitPoints,
	})
})
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
