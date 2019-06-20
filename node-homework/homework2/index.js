var fs = require("fs");

var lip = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices commodo nulla, in mattis sapien finibus at. Sed bibendum nulla quis consectetur efficitur. Donec quis euismod magna. Pellentesque pulvinar pharetra tellus, ac sodales lacus semper rutrum. Aliquam cursus vehicula pulvinar. Aenean pellentesque rhoncus dolor. Donec lacus nisi, tempor ac risus eu, euismod hendrerit nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis molestie, ex quis ullamcorper suscipit, nibh eros varius lacus, non tincidunt metus lectus et ante. Curabitur porttitor risus ac lorem porta, sed ullamcorper nisi viverra. Nulla facilisi. Pellentesque porta arcu in pulvinar condimentum. Sed nec fermentum nulla. Suspendisse porttitor, nunc ac sodales tristique, elit dui rutrum erat, sit amet ultricies nisl lorem eget erat. Mauris gravida enim facilisis pretium feugiat. Duis sagittis rutrum facilisis.
Aenean at viverra risus. Nunc non magna vel nulla suscipit convallis eu ut quam. Etiam quis lorem id dolor pellentesque fringilla. Vivamus lacinia ornare ipsum quis blandit. Sed bibendum diam diam. Vestibulum finibus lobortis dui, sed posuere orci molestie sit amet. Nunc posuere vel metus in bibendum. Nulla facilisi. Fusce sodales finibus elementum. Aenean nec placerat mauris. Vivamus convallis augue sed nisl sagittis finibus. Maecenas non odio porta, fermentum metus id, placerat libero. Mauris euismod odio et diam pellentesque, ut tincidunt lorem ornare. Nunc dignissim cursus risus, ac imperdiet ante mollis nec.
Mauris malesuada magna eu urna facilisis, vitae egestas urna sodales. Vestibulum porta, orci non ornare feugiat, metus mi elementum nunc, in vehicula quam tortor vitae ex. Proin id nisi et massa faucibus iaculis. Praesent placerat auctor ligula ac scelerisque. Duis varius nulla ac congue tempus. Praesent placerat lacus vitae enim placerat, ut cursus ipsum efficitur. Mauris a turpis lorem. Nunc quis nibh lacinia, accumsan elit a, mollis felis. Quisque at enim congue justo efficitur auctor. Duis molestie congue condimentum.
Proin at tristique lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis dignissim pretium quam, vulputate imperdiet sem ultricies id. Pellentesque imperdiet, elit at aliquam vulputate, neque justo tempus nisl, a venenatis nulla mi ac ligula. Sed eget justo quis mauris ultrices dictum vel sed dui. In gravida justo id ex rutrum, in maximus felis pretium. Morbi nibh augue, fermentum eu condimentum eget, dictum iaculis enim. Nullam elementum elit at orci accumsan sagittis. Quisque ac purus feugiat, vehicula lorem semper, tincidunt augue. Vivamus ut dictum ipsum. Nulla suscipit non est eu cursus. Sed fringilla ligula laoreet, scelerisque mauris tempus, semper turpis. Maecenas at felis ut neque accumsan mollis. Vivamus ut vulputate leo.
Curabitur accumsan, neque quis maximus consequat, tellus odio lobortis velit, nec suscipit orci neque vitae nulla. Aenean cursus non mauris vitae pharetra. Nam pulvinar facilisis nisl, vel aliquam nisl lacinia a. Morbi eu rutrum nunc. Vestibulum viverra purus vitae tellus maximus, a fringilla purus euismod. Vestibulum nec scelerisque mi, et convallis erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras volutpat sapien vitae massa posuere pellentesque. Ut pellentesque placerat diam in vestibulum. Cras euismod vel tortor id volutpat. Nunc hendrerit venenatis venenatis.`;
fs.writeFile("test.txt", lip, (err) =>{
    if(err) {
        console.error(err);
    }
});

fs.readFile("test.txt", "utf8", (err,data) => { 
    if(err) {
        console.log(err);
    }
  totalCharCount(data);
  onlyLetters(data);
  wordCount(data);
  sentenceCount(data);
});

var totalCharCount = (data) => {
    console.log("There are " + data.length + " characters,signs and empty spaces in this text.");
};

var onlyLetters = (str) => {
    var check = /[a-z]/gi;
    var m = str.match(check);
    if (m) {
      console.log("There are " + m.length + " letters in this text.");
    }
}

var wordCount = (str) => { 
    var arrMore = []; var arrLess = [];var arrEqual = [];
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