//constructor accepts two arguments: text and cloze
//cloze property that contains only the cloze deleted portion of the text
//partial property that contains only the partial property of the text
//fullText property that contains only the full text
//throw or log an error when the cloze deletion does not appear on the input text

function ClozeCard(fullText, cloze) {
  this.fullText = fullText;
  this.cloze = cloze;
  this.partial = this.partialArray;
  this.fullTextArray = [];
  this.clozeArray = [];
  this.partialArray = this.fullTextArray;
  this.deleteClozeFromFullText = function(){
    this.fullTextArray.push(fullText.split(" "));
    this.clozeArray.push(cloze.split(" "))
    for (i = 0; i < this.clozeArray[0].length; i++){
      for (x = 0; x < this.partialArray[0].length; x++) {
        if (this.clozeArray[0][i] === this.partialArray[0][x]) {
          this.partialArray[0][x] = "_____"; 
        }
      }
    }
    //console.log(this.partialArray);
    this.partial = this.partialArray.join(" ");
    console.log(this.partial);
  };
}

//module.exports = ClozeCard;

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
//firstPresidentCloze.fillPartialArray();
firstPresidentCloze.deleteClozeFromFullText();
// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
//console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
//console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");