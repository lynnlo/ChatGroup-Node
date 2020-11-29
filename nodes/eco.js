// Chat Group Node Bot
// Lynn O

// Economy Node

Data = require("../data/data");
random = require("random");

function main(Message, command, full_command){
	arg0 = full_command[0];
	arg1 = full_command[1];
	fun_data = new Data("fun");

	// Coinbank
	if (command == "coins"){
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
			fun_data.save();
			return "You've worked! Coins : " + fun_data.data.coins[Message.author.id];
		}
		else{
			return "You don't have a coinbank address. Try creating a coinbank account.";
		}
	}
	else if (command == "WORK"){
		if (fun_data.data.coins.hasOwnProperty(Message.author.id)){
			fun_data.data.coins[Message.author.id] += 2;
			fun_data.save();
			return "You've worked, hard! Coins : " + fun_data.data.coins[Message.author.id];
		}
		else{
			return "You don't have a coinbank address. Try creating a coinbank account.";
		}
	}
	else if (command == "**WORK**"){
		if (fun_data.data.coins.hasOwnProperty(Message.author.id)){
			fun_data.data.coins[Message.author.id] += 3;
			fun_data.save();
			return "You've worked, super hard! Coins : " + fun_data.data.coins[Message.author.id];
		}
		else{
			return "You don't have a coinbank address. Try creating a coinbank account.";
		}
	}
	else if (command == "__**WORK**__"){
		if (fun_data.data.coins.hasOwnProperty(Message.author.id)){
			fun_data.data.coins[Message.author.id] += 4;
			fun_data.save();
			return "You've worked, like really really hard! Coins : " + fun_data.data.coins[Message.author.id];
		}
		else{
			return "You don't have a coinbank address. Try creating a coinbank account.";
		}
	}
	else if (command == "account"){
		if (fun_data.data.coins.hasOwnProperty(Message.author.id)){
			return "Address : `"+Math.round((Message.author.id/2)*2)+"` \nCoins : `"+fun_data.data.coins[Message.author.id]+"`";
		}
		else{
			fun_data.data.coins[Message.author.id] = 0;
			fun_data.save();
			return "Congrats, You've just created your coinbank account! \nAddress : `"+Math.round((Message.author.id/2)*2)+"`";
		}
	}
	else if (command == "remove"){
		if (fun_data.data.coins.hasOwnProperty(Message.author.id)){
			if (arg0 == "confirm"){
				delete fun_data.data.coins[Message.author.id];
				fun_data.save();
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

	// Stab TODO : Add cooldown
	if (command == "wounds"){
		if (fun_data.data.wounds.hasOwnProperty(Message.author.id)){
			return "Wounds : " + fun_data.data.wounds[Message.author.id];
		}
		else{
			return "You don't have any wounds. Try angering a friend to get more.";
		}
	}
	else if (command == "stab"){
		victim = Array.from(Message.guild.members.cache)[random.int(0, Message.guild.memberCount - 1)][1];
		if (fun_data.data.wounds.hasOwnProperty(victim.id)){
			fun_data.data.wounds[victim.id] += 1;
			fun_data.save();
			return "You've stabbed <@"+victim.id+"> you monster! Total Wounds : " + fun_data.data.wounds[victim.id];
		}
		else{
			fun_data.data.wounds[victim.id] = 1;
			fun_data.save();
			return "You've stabbed <@"+victim.id+"> (First Hit) you monster! Total Wounds : " + fun_data.data.wounds[victim.id];
		}
	}
	else if (command == "punch"){
		victim = Array.from(Message.guild.members.cache)[random.int(0, Message.guild.memberCount - 1)][1];
		if (fun_data.data.wounds.hasOwnProperty(victim.id)){
			fun_data.data.wounds[victim.id] += 1;
			fun_data.save();
			return "You've punched <@"+victim.id+"> you monster! Total Wounds : " + fun_data.data.wounds[victim.id];
		}
		else{
			fun_data.data.wounds[victim.id] = 1;
			fun_data.save();
			return "You've punched <@"+victim.id+"> (First Hit) you monster! Total Wounds : " + fun_data.data.wounds[victim.id];
		}
	}
	else if (command == "bite"){
		victim = Array.from(Message.guild.members.cache)[random.int(0, Message.guild.memberCount - 1)][1];
		if (fun_data.data.wounds.hasOwnProperty(victim.id)){
			fun_data.data.wounds[victim.id] += 1;
			fun_data.save();
			return "You've bitten <@"+victim.id+"> you monster! Total Wounds : " + fun_data.data.wounds[victim.id];
		}
		else{
			fun_data.data.wounds[victim.id] = 1;
			fun_data.save();
			return "You've bitten <@"+victim.id+"> (First Hit) you monster! Total Wounds : " + fun_data.data.wounds[victim.id];
		}
	}


}

module.exports = main; 