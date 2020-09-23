// Chat Group Node Bot
// Mario O, Lynn O

// Math Node

function main(Message, command, full_command){
	arg0 = parseFloat(full_command[0]);
	arg1 = parseFloat(full_command[1]);
	arg2 = parseFloat(full_command[2]);
	arg3 = parseFloat(full_command[3]);

	// Operations
	if (command == "add"){
		return arg0 + arg1;
	}
	else if (command == "sub"){
		return arg0 - arg1;
	}
	else if (command == "mul"){
		return arg0 * arg1;
	}
	else if (command == "div"){
		return arg0 / arg1;
	}
	else if (command == "power"){
		return Math.pow(arg0, arg1);
	}
	else if (command == "round"){
		return Math.round(arg0);
	}
	else if (command == "sqrt"){
		return Math.sqrt(arg0);
	}
	else if (command == "square"){
		return arg0 ** 2;
	}
	else if (command == "cube"){
		return arg0 ** 3;
	}

	// Functions
	if (command == "distance"){
		return Math.sqrt((arg3 - arg1) ** 2) + ((arg0 - arg2) ** 2);
	}
	else if (command == "quadratic"){
		// Fix this later
		return ((-1 * arg1) + Math.sqrt((arg1 ** 2) - (4 * (arg0 * arg2)))) / (2 * arg0), ((-1 * arg1) - Math.sqrt((arg1 ** 2) - (4 * (arg0 * arg2)))) / (2 * arg0);
	}
}

module.exports = main;