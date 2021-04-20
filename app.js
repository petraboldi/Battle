const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.render("./index");
});

app.post("/", (req, res) => {
	console.log(req.body)
	console.log(req.body['first-person-name'])
	console.log(req.body['second-person-name'])
	res.render("./battle", 
	{firstPersonName:req.body['first-person-name'],
	secondPersonName:req.body['second-person-name']
})});


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
