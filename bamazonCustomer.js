var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Thegreenocto19!",
	database: "bamazon_db"
});

connection.connect(function(err) {
	if (err) throw err;

	console.log("connection as id " + connection.threadId);
});

connection.query("SELECT * FROM products", function(error, response) {
		for (var i = 0; i < response.length; i++) {
			console.log(response[i].item_id + " | " + response[i].product_name + " | " + response[i].price);
		}
});



// inquirer.prompt([
// 	{
// 		type:"list",
// 		name: "action",
// 		message: "Choose an option: ",
// 		choices: ["Bid on an item", "Post an item"]
// 	}
// 	]).then(function(answers) {
// 		if (answers.action === "Post an item") {
// 			inquirer.prompt([
// 				{
// 					type: "input",
// 					name: "itemName",
// 					message: "What item would you like to post?",
// 				}, {
// 					type: "input",
// 					name: "price",
// 					message: "Set your minimum price: "
// 				}, {
// 					type: "list",
// 					name: "quality",
// 					message: "Choose the condition of your item: ",
// 					choices: ["New", "Gently Used", "Poor"]
// 				}
// 				]).then(function(answers) {
// 					console.log(answers);
// 					connection.query("INSERT INTO items SET ?", {itemName: answers.itemName, price: answers.price, quality: answers.quality}, function(error, response) {});
// 				});
// 		} else 
// 			connection.query("SELECT * FROM items WHERE sold=?", [false],function(error, response) {
// 				console.log("Check out our available items!");
// 			for (var i = 0; i < response.length; i++) {
// 					console.log(response[i].itemName + " | " + response[i].quality)
// 					availableItems.push(response[i].itemName);
// 			}

// 			inquirer.prompt([
// 			{
// 				type:"list",
// 				name: "bid",
// 				message: "Which item would you like to bid on?",
// 				choices: availableItems
// 			}
// 				]).then(function(answers) {
// 					console.log(answers.bid);

// 					inquirer.prompt([
// 					{
// 						type: "input",
// 						name: "bidPrice",
// 						message: "Enter your bid price: "
// 					}
// 					]).then(function(answers) {
						
// 					})
// 				});
// 			}
// 		)
	
// });

