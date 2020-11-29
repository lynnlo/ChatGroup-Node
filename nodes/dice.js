// Chat Group Node Bot
// Mario O, Lynn O

// Dice Node

let seedrandom = require("seedrandom");
let random = require("random");

function main(Message, command, full_command){
	arg0 = parseInt(full_command[0]);
	arg1 = parseInt(full_command[1]);
	arg2 = full_command[2];

	if (command == "dice"){
		if ((arg0 && arg1) && (arg0 < 10000 && (arg1 < 10000))){
			return random.int(arg0, arg1);
		}
	}
	else if (command == "coin"){
		return 1 == random.int(1, 2) ? ":coin: Heads!" : ":coin: Tails!";
	}
	else if (command == "random"){
		if ((arg0 && arg1) && (arg0 < 10000 && (arg1 < 10000))){
			return random.float(arg0, arg1);
		}
	}
	else if (command == "seed"){
		if ((arg0 && arg1) && (arg0 < 10000 && (arg1 < 10000)) && arg2){
			random.use(seedrandom(arg2));
			return random.float(arg0, arg1);
		}
	}
}

module.exports = main;