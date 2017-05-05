var BasicCard = require("./BasicCard.js");

var ClozeCard = function(cloze, partial, fullText) {
	this.cloze = cloze;
	this.partial = partial;
	this.fullText = fullText;
};

var numberOfLetters = new ClozeCard(
	"26", "There are ... letters in the alphabet", "There are 26 letters in the alphabet.");

console.log(numberOfLetters.cloze);
console.log(numberOfLetters.partial);
console.log(numberOfLetters.fullText);

//somehow get it to throw error if the cloze word they enter isn't in the question
// for (var i = 0; i < this.fullText.length; i++) {
// 	if (ClozeCard.cloze !== this.fullText[i]) {
// 		console.log("Oops! That word/phrase doesn't appear in the quesion.");
// 	}
// }



module.exports = ClozeCard;