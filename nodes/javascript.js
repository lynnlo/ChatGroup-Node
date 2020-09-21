// Chat Group Node Bot
// Lynn O

// Javascript Node

safeEval = require("notevil")

function main(Message, full_command){
	command = full_command.shift();
	arg = full_command.join(" ")

	if (command == "js"){
		console.log(arg)
		try{
			output = safeEval(arg);
			console.log(output)
			return output;
		} catch(e){
			return e.message;
		}
	}
}

module.exports = main