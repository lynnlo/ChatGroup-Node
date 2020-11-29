// Chat Group Node Bot
// 

// Shipping Node

let seedrandom = require("seedrandom");
let random = require("random");

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
	else if (command == "fight"){
		value0 = arg0;
		value1 = arg1;
		if (value0.length > 2 || value1.length > 2){
			seed = seedrandom(value0 + value1);
			random.use(seed);
			score = random.int(0, 1);
			if (score == 0){
				return ":exclamation: " + arg0 + " would win the fight.";
			}
			else{
				return ":exclamation:" + arg1 + " would win the fight.";
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
				return ":confused: " + arg0 + " is not " + full_command.slice(1, full_command.length) + ".";
			}
			else{
				return ":100: " + arg0 + " is " + full_command.slice(1, full_command.length) + "!";
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
				return ":thumbsdown: " + arg0 + " should not " + full_command.slice(1, full_command.length) + ".";
			}
			else{
				return ":thumbsup: " + arg0 + " should " + full_command.slice(1, full_command.length) + "!";
			}
		}
	}
	else if (command == "does"){
		value0 = arg0;
		value1 = arg1;
		if (value0.length > 2 || value1.length > 2){
			seed = seedrandom(value0 + value1);
			random.use(seed);
			score = random.int(0, 1);
			if (score == 0){
				return ":thumbsdown: " + arg0 + " does not " + full_command.slice(1, full_command.length) + ".";
			}
			else{
				return ":thumbsup: " + arg0 + " does " + full_command.slice(1, full_command.length) + "!";
			}
		}
	}
}

module.exports = main;