var http = require('http');

var server = http.createServer(function (req, res) {
   var URL = req.url.split("/");
   var output;
   switch(URL[1]) {
       case "add":
        output = 0;
           if(URL.length > 2) {
                for(let i = 2; i < URL.length;i++) {
                    output += parseInt(URL[i]);
                }
            }
            break;
        case "sub":
            output = parseInt(URL[2]);
            if(URL.length >= 2) {     
                for(let i = 3; i < URL.length;i++) {
                    output -= parseInt(URL[i]);  
                }
            }
            break;
        case "mul":
            output = 1;
            if(URL.length >= 2) {
                for(let i = 2; i < URL.length;i++) {
                    output *= parseInt(URL[i]);
            }
        }
            break;
        case "div":
            output = parseInt(URL[2]);
            if(URL.length >= 2) {
                for(let i = 3; i < URL.length; i++) {
                    output /= parseInt(URL[i]);   
                }
            }
            break;
   };
            res.write("Result for operation " + URL[1] + " is " + output);
            res.end(); 
});

server.listen(8080, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Server started successfully!");
});