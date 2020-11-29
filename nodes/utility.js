// Chat Group Node Bot
// 

// Node

function main(Message, command, full_command){

	if (command == "say"){
		mes = Message.channel.send(full_command.join(" ")).catch()
		Message.delete().catch();
		console.log(mes)
	}
}

module.exports = main;