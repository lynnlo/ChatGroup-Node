// Chat Group Node Bot
// Lynn O

// API Node

fetch = require("node-fetch");
var image = "Not loaded, please try again later.";

function main(Message, command, full_command){

	// Animal pictures.
	if (command == "bork"){
		(async () => {
			response = await fetch('https://dog.ceo/api/breeds/image/random');
			image = await response.json()
			image = await image["message"];
		})();
		setTimeout(() => Message.channel.send(image), 100);
	}
	else if (command == "meow"){
		(async () => {
			response = await fetch('http://aws.random.cat/meow');
			image = await response.json()
			image = await image["file"];
		})();
		setTimeout(() => Message.channel.send(image), 100);
	}
}

module.exports = main;