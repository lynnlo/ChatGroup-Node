// Chat Group Node Bot
// Lynn O

// Data Module

fs = require("fs");


class Data{

	constructor(datastore){
		this.link = "./data/"+ datastore + ".json"
		this.data = JSON.parse(fs.readFileSync("./data/"+ datastore + ".json"));
	}
	
	save(){
		fs.writeFileSync(this.link, JSON.stringify(this.data))
	}
}

module.exports = Data