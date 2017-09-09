//var inquirer = require("inquirer");

function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  // this.printFront = function() {
  // 	console.log("Card Front: " + this.front);
  // }
  // this.printBack = function() {
  // 	console.log("Card Back: " + this.back);
  // }
}

// var newCard = new BasicCard(front, back);
// console.log(newCard.front);
// console.log(newCard.back);
// newCard.printFront();
// newCard.printBack();

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front);
console.log(firstPresident.back);
//firstPresident.printFront();
//firstPresident.printBack();

//front property

//back property

//module.exports = BasicCard;

// inquirer.prompt([{
//   name:"front",
//   message:"What is the question?"
// },{
//   name:"back",
//   message:"What is the answer?"
// }]).then(function(answers){
// 	var newCard = new BasicCard(answers.front, answers.back);
// 	newCard.printFront();
// 	newCard.printBack();
// })