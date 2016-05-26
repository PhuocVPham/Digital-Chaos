/**
 * Created by PhuocPham on 5/18/2016.
 */


var http = require("http");
var fs = require('fs');
var validator = require("validator");
var server = http.createServer(function(request, response) {
    fs.readFile("index.html", 'utf-8', function (err,data) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })

});

server.listen(3000);

console.log("Server is listening");
console.log(validator.isEmail("abc@gmail.com"));

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    socket.on('message_to_server', function (data) {
        var es_msg = validator.escape(data["message"]);
       io.sockets.emit("message_to_client", {message:es_msg});
    });


});



