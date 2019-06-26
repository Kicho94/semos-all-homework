var http = require('http');

var server = http.createServer(function (req, res) {
   var URL = req.url.split("/");
   var output = 0; var first = parseInt(URL[2]);
   switch(URL[1]) {
       case "add":
           if(URL.length > 2) {
                for(let i = 2; i < URL.length;i++) {
                    output += parseInt(URL[i]);
                }
                res.write("Result for operation " + URL[1] + " is " + output + ".");
           }
            break;
        case "sub":
            if(URL.length >= 2) {     
                for(let i = 3; i < URL.length;i++) {
                    first -= parseInt(URL[i]);  
            }
            res.write("Result for operation " + URL[1] + " is " + first + ".");
            }
            break;
        case "mul":
            output = 1;
            if(URL.length >= 2) {
                for(let i = 2; i < URL.length;i++) {
                    output *= parseInt(URL[i]);
            }
            res.write("Result for operation " + URL[1] + " is " + output + ".");
        }
            break;
        case "div":
            if(URL.length >= 2) {
                for(let i = 3; i < URL.length; i++) {
                    first /= parseInt(URL[i]);   
                }
            res.write("Result for operation " + URL[1] + " is " + first + ".");
            }
            break;
   };
            res.end(); //end the response
});

server.listen(8080, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Server started successfully!");
});