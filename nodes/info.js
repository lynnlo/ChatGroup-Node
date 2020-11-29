// Chat Group Node Bot
// Lynn O

// Information Node

function main(Message, command, full_command){

	if (command == "website"){
		return "You can find Chat Group Node's Website Here: http://node.ongtech.co/";
	}
	else if (command == "leaderboard"){
		return "You can find Chat Group's Leaderboard Here: https://arcanebot.xyz/leaderboard/ChatGroup";
	}
	else if (command == "info"){ //TODO actually do the ping
		return "Chat Group Node, Javascript \n"+
		"Version : "+process.env.VERSION+"\n"+
		"Latest Update : "+process.env.LATESTUPDATE;
	}
}

module.exports = main;