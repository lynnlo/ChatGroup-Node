// Chat Group Node Bot
// 

// Shipping Node

seedrandom = require("seedrandom")
random = require("random");

function main(Message, command, full_command){
	user0 = Message.mentions.users[0] || full_command[0] || "";
	user1 = Message.mentions.users[1] || full_command[1] || "";

	if (command == "ship"){
		value0 = user0;
		value1 = user1;
		if (value0.length > 2 || value1.length > 2){
			seed = seedrandom(value0 + value1);
			random.use(seed);
			score = random.int(0, 101);

			return ":hearts: " + user0 + " x " + user1 + " = `" + score + "`%";
		}
	}
	else if (command == "match"){
		value0 = user0;
		value1 = user1;
		if (value0.length > 2 || value1.length > 2){
			seed = seedrandom(value0 + value1);
			random.use(seed);
			score = random.int(0, 1);
			if (score == 0){
				return ":slight_frown: " + user0 + " and " + user1 + " does not match.";
			}
			else{
				return ":hearts: " + user0 + " and " + user1 + " does match!";
			}
		}
	}
}

module.exports = main;