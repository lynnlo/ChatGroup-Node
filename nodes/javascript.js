// Chat Group Node Bot
// Lynn O

// Javascript Node

let safeEval = require("notevil");

function main(Message, command, full_command){
	arg = full_command.join(" ").replace("```", "")

	ctx = {Math : Math}

	if (command == "js" || command == "```js"){
		try{
			output = safeEval(arg, ctx);
			return output;
		} catch(e){
			return e.message;
		}
	}
}

module.exports = main;