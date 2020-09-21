// Chat Group Node Bot
// Mario O, Lynn O

// Math Node

function main(Message, full_command){
	command = full_command[0];
	arg0 = full_command[1];
	arg1 = full_command[2];

	if (command == "add"){
		output = parseInt(arg0) + parseInt(arg1);
		return output;
	}
	else if (command == "sub"){
		output = parseInt(arg0) - parseInt(arg1);
		return output;
	}
	else if (command == "mul"){
		output = parseInt(arg0) * parseInt(arg1);
		return output;
	}
		else if (command == "div"){
		output = parseInt(arg0) / parseInt(arg1);
		return output;
	}
}

module.exports = main