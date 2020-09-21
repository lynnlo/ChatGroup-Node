// Chat Group Node Bot
// Lynn O

// Fun Node

Data = require("../data/data")

function main(Message, full_command){
	command = full_command[0];
	arg0 = full_command[1];
	arg1 = full_command[2];
	fun_data = new Data("fun");

	// Coinbank
	if (command == "coins" || command == "account"){
		if (fun_data.data.coins.hasOwnProperty(Message.author.id)){
			return "Coins : " + fun_data.data.coins[Message.author.id];
		}
		else{
			return "You don't have any coins. Try creating a coinbank account.";
		}
	}
	else if (command == "work"){
		if (fun_data.data.coins.hasOwnProperty(Message.author.id)){
			fun_data.data.coins[Message.author.id] += 1;
			fun_data.save()
			return "You've worked! Coins : " + fun_data.data.coins[Message.author.id];
		}
		else{
			return "You don't have any coins. Try creating a coinbank account.";
		}
	}
	else if (command == "create"){
		if (fun_data.data.coins.hasOwnProperty(Message.author.id)){
			return "You already have a coinbank account";
		}
		else{
			fun_data.data.coins[Message.author.id] = 0;
			fun_data.save()
			return "Congrats, You've just created you account!";
		}
	}
	else if (command == "remove"){
		if (fun_data.data.coins.hasOwnProperty(Message.author.id)){
			if (arg0 == "confirm"){
				delete fun_data.data.coins[Message.author.id];
				fun_data.save()
				return "Your account has been removed.";
			}
			else{
				return "Removing you account will delete all of your coin. Add a confirm argument to confrim.";
			}
		}
		else{
			return "You don't have a coinbank account coins.";
		}
	}

	// Stab
	if (command == "stab"){
		if (fun_data.data.coins.hasOwnProperty(Message.author.id)){
			return "Coins : " + fun_data.data.coins[Message.author.id];
		}
		else{
			return "You don't have any coins. Try creating a coinbank account.";
		}
	}
}

module.exports = main