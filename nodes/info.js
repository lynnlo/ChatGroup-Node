// Chat Group Node Bot
// Lynn O

// Information Node

function main(Message, full_command){
	command = full_command[0];

	if (command == "website"){
		return "You can find Chat Group Node's Website Here: https://chatgroup-node.lynnlo.repl.co";
	}
	else if (command == "leaderboard"){
		return "You can find Chat Group's Leaderboard Here: https://arcanebot.xyz/leaderboard/ChatGroup";
	}
}

module.exports = main