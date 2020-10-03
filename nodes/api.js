// Chat Group Node Bot
// Lynn O

// API Node

fetch = require("node-fetch");
unirest = require("unirest");

var image = "Image not loaded, please try again later.";
var text = "Not loaded, please try again later.";

function main(Message, command, full_command){

	// Animal pictures.
	if (command == "bork"){
		(async () => {
			response = await fetch('https://dog.ceo/api/breeds/image/random');
			response = await response.json()
			image = await response["message"];
		})();
		setTimeout(() => Message.channel.send(image).catch(), 1000);
	}
	else if (command == "meow"){
		(async () => {
			response = await fetch('http://aws.random.cat/meow');
			response = await response.json()
			image = await response["file"];
		})();
		setTimeout(() => Message.channel.send(image).catch(), 1000);
	}

	// Some Random API.
	if (command == "dog"){
		(async () => {
			req = await fetch('https://some-random-api.ml/img/dog');
			response = await req.json()
			image = await response["link"];
		})();
		setTimeout(() => Message.channel.send(image).catch(), 1000);
	}
	else if (command == "cat"){
		(async () => {
			req = await fetch('https://some-random-api.ml/img/cat');
			response = await req.json()
			image = await response["link"];
		})();
		setTimeout(() => Message.channel.send(image).catch(), 1000);
	}
	else if (command == "meme"){
		(async () => {
			req = await fetch('https://some-random-api.ml/meme');
			response = await req.json()
			image = await response["image"];
			text = await response["text"];
		})();
		setTimeout(() => Message.channel.send(text+"\n"+image).catch(), 1000);
	}
	else if (command == "ai"){
		(async () => {
			response = await fetch('https://some-random-api.ml/chatbot?message='+full_command.join(" "))
			.then((req) => req.json())
			text = await response["response"];
		})();
		setTimeout(() => Message.channel.send(text ? text : ""), 2500);
	}

	if (command == "search"){
		var req = unirest("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI");
		req.query({
			"safeSearch": "true",
			"pageNumber": "1",
			"pageSize": "1",
			"q": full_command.join(" "),
			"autoCorrect": "false"
		});
		req.headers({
			"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
			"x-rapidapi-key": "8164eb8e38msh9974cb48c4847d3p11c6a4jsnf66de627b33c",
			"useQueryString": true
		});
		req.end(function (res) {
			if (res.error || res.body.value.length < 1) {return "Error"};
			Message.channel.send(res.body.value[0]["title"]+"\n"+res.body.value[0]["url"] || "Not loaded.");
		});
	}
	else if (command == "isearch"){
		var req = unirest("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI");
		req.query({
			"safeSearch": "true",
			"pageNumber": "1",
			"pageSize": "1",
			"q": full_command.join(" "),
			"autoCorrect": "false"
		});
		req.headers({
			"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
			"x-rapidapi-key": "8164eb8e38msh9974cb48c4847d3p11c6a4jsnf66de627b33c",
			"useQueryString": true
		});
		req.end(function (res) {
			if (res.error || res.body.value.length < 1) {return "Error"};
			Message.channel.send(res.body.value[0]["url"] || "Not loaded.");
		});
	}
	else if (command == "joke"){
		var req = unirest("GET", "https://joke3.p.rapidapi.com/v1/joke");
		req.headers({
			"x-rapidapi-host": "joke3.p.rapidapi.com",
			"x-rapidapi-key": "8164eb8e38msh9974cb48c4847d3p11c6a4jsnf66de627b33c",
			"useQueryString": true
		});
		req.end(function (res) {
			if (res.error) {return "Error"};
			Message.channel.send(res.body.content || "Not loaded.");
		});
	}
}

module.exports = main;