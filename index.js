// Chat Group Node Bot
// Mario O, Lynn O, Andres A

let discord = require("discord.js");
let express = require("express");
let fs = require("fs");
let path = require("path");

var Bot = new discord.Client();
var Server = new express();

var prefixes = ["cgn ", ""];
var Nodes = [];

fs.readdir("./nodes/", function(err, files){
	if (err){ console.log("Error : "+ err);}
	files.forEach(function(file){
		Nodes.push(require(path.join(__dirname, "/nodes/" + file.replace(".js",""))));
	})
})

Bot.on("message", function(Message){
	prefixes.forEach((prefix) =>{
		if (Message.author.id != Bot.user.id && Message.content.startsWith(prefix)){
			full_command = Message.content.replace(prefix, "").replace(/\n/g, " ").split(" ");
			command =  full_command.shift()
			Nodes.forEach(function(module){
				return_message = module(Message, command, full_command)
				if (return_message){
					Message.channel.send(return_message);
				}			
			})
		}
	})
})

Server.use("/",express.static(path.join(__dirname, "html/"))).listen(process.env.PORT || 3000, () => {});

Bot.login(process.env.TOKEN);