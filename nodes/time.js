// Chat Group Node Bot
// Lynn Ong

// Time Node

function main(Message, command, full_command){
	
	if (command == "date"){
		return Date();
	}
	else if (command == "time"){
		return Date.UTC();
	}
}

module.exports = main;