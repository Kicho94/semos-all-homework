var fs = require("fs");
fs.readFile("lorem.txt", "utf8", (err,data) => { 
    if(err) {
        console.log(err);
    }
  charCount(data);
  wordCount(data);
  sentenceCount(data);
});
var charCount = (data) => {
    console.log("There are " + data.length + " characters in this text.");
};
var wordCount = (str) => { 
    var arrMore = [];
    var arrLess = [];
    var arrEqual = [];
    var words = str.split(" ");
    var a = words.length;
       for(var i = 0; i < words.length;i++){
         if(words[i].length > 7) {
            arrMore.push(words[i]);
        }else if(words[i].length < 7) {
            arrLess.push(words[i])
        }else{
            arrEqual.push(words[i]);
        }
       }   
console.log(`There are ${a} words in total and among them, there are ${arrMore.length} words with more than 7 characters, 
${arrLess.length} with less than 7 characters, and ${arrEqual.length} words with exactly 7 characters.`)};
    var sentenceCount = (str) => {
        var sentences = str.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
        console.log(`There are ${sentences.length} sentences in this text.`)
};