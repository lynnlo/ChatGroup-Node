// Chat Group Node Bot
// Mario O, Lynn O

let discord = require("discord.js");
let express = require("express");
let fs = require("fs");
let path = require("path");

var Bot = new discord.Client();
var Server = new express();

var prefix = "cgn ";
var Nodes = [];

fs.readdir("./nodes/", function(err, files){
	if (err){ console.log("Error : "+ err);}
	files.forEach(function(file){
		Nodes.push(require(path.join(__dirname, "/nodes/" + file.replace(".js",""))));
	})
})

Bot.on("message", function(Message){
	if (Message.author.id != Bot.user.id && Message.content.startsWith(prefix)){
		full_command = Message.content.replace(prefix, "").split(" ");
		Nodes.forEach(function(module){
			return_message = module(Message, full_command)
			if (return_message){
				Message.channel.send(return_message);
			}			
		})
	}
})

Server.use("/",express.static(path.join(__dirname, "html/"))).listen(process.env.PORT || 3000, () => {});

Bot.login(process.env.KEY);