const express = require("express");
const database = require("./db.js");
const server = express();

// CORS
server.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
server.get("/patient", async (request, response) => {
	database.client.connect(async (error, client) => {
		if (error) {
			console.log("error in db init");
			response.send("error");
			return;
		}
		var result = await client
			.db("datastore")
			.collection("patients")
			.findOne({ name: request.query.name });
		if (result == null) {
			response.send(JSON.stringify({ error: "Patient Name invalid" }));
			client.close();
			return;
		}
		console.log(request.query.name);
		client.close();
		response.send(result);
	});
});
server.use(express.json());
server.listen(3001, () => {
	console.log("Server started at port:3001");
});
