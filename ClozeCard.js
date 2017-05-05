var inquirer = require("inquirer");

var fs = require("fs");

var ClozeCard = function(cloze, partial, fullText) {
	this.cloze = cloze;
	this.partial = partial;
	this.fullText = fullText;
};

var count = 0;

var questionArray = [];

var addCloze = function() {
	if (count < 5) {
		inquirer.prompt([
		{
			name: "full",
			message: "Type your full text statement!",
			type: "input"
		}, {
			name: "partial",
			message: "Type your partial question without the cloze word or phrase!",
			type: "input"
		}, {
			name: "cloze",
			message: "Type your cloze word or phrase",
			type: "input"
		}
		]).then(function(questions) {
			var newQuestion = new ClozeCard(
				questions.full,
				questions.partial,
				questions.cloze);

			questionArray.push(newQuestion);

			fs.writeFile("ClozeCard.json", JSON.stringify(questionArray, null, 2));

			count++;

			addCloze();
		});
	}
};


addCloze();

module.exports = ClozeCard;