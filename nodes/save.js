// Chat Group Node Bot
// Lynn O

// Save Node

Data = require("../data/data");

function main(Message, command, full_command){
	key = full_command[0]
	value = full_command.slice(1).join(" ")
	save = new Data("save");

	if (command == "save"){
		if (save.data.cgs.hasOwnProperty(key)){
			return "Key : `" + key + "` already has a value.";
		}
		else{
			save.data.cgs[key] = value;
			save.save();
			return "Saved! \nKey : `" + key + "`\nValue : `"+value+"`";
		}
	}
	else if (command == "load"){
		if (save.data.cgs.hasOwnProperty(key)){
			return save.data.cgs[key];
		}
		else{
			return "Key : `" + key + "` doesn't have a value.";
		}
	}
}

module.exports = main;