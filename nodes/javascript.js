// Chat Group Node Bot
// Lynn O

// Javascript Node

let safeEval = require("notevil");
let random = require("random");

function main(Message, command, full_command){
	arg = full_command.join(" ").replace("```", "")

	ctx = {Math : Math, Date : Date, random : random}

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