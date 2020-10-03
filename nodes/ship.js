// Chat Group Node Bot
// 

// Shipping Node

seedrandom = require("seedrandom")
random = require("random");

function main(Message, command, full_command){
	arg0 = Message.mentions.users[0] || full_command[0] || "";
	arg1 = Message.mentions.users[1] || full_command[1] || "";

	if (command == "ship"){
		value0 = arg0;
		value1 = arg1;
		if (value0.length > 2 || value1.length > 2){
			seed = seedrandom(value0 + value1);
			random.use(seed);
			score = random.int(0, 101);

			return ":hearts: " + arg0 + " x " + arg1 + " = `" + score + "`%";
		}
	}
	else if (command == "match"){
		value0 = arg0;
		value1 = arg1;
		if (value0.length > 2 || value1.length > 2){
			seed = seedrandom(value0 + value1);
			random.use(seed);
			score = random.int(0, 1);
			if (score == 0){
				return ":slight_frown: " + arg0 + " and " + arg1 + " does not match.";
			}
			else{
				return ":hearts: " + arg0 + " and " + arg1 + " does match!";
			}
		}
	}
	else if (command == "is"){
		value0 = arg0;
		value1 = arg1;
		if (value0.length > 2 || value1.length > 2){
			seed = seedrandom(value0 + value1);
			random.use(seed);
			score = random.int(0, 1);
			if (score == 0){
				return ":confused: " + arg0 + " is not " + arg1 + ".";
			}
			else{
				return ":100: " + arg0 + " is " + arg1 + "!";
			}
		}
	}
	else if (command == "should"){
		value0 = arg0;
		value1 = arg1;
		if (value0.length > 2 || value1.length > 2){
			seed = seedrandom(value0 + value1);
			random.use(seed);
			score = random.int(0, 1);
			if (score == 0){
				return ":thumbsdown: " + arg0 + " should not " + arg1 + ".";
			}
			else{
				return ":thumbsup: " + arg0 + " should " + arg1 + "!";
			}
		}
	}
}

module.exports = main;