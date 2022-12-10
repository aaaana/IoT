#!/usr/bin/env node

// - Node.js installation

// - The module websocekt is installed by this command

//    npm install -g websocket

// - If you want to use a formal protocol, you need to replace

//      var WebSocketServer = require(

//         'C:/Users/Henry/AppData/Roaming/npm/node_modules/websocket').server;

//   with

//       var WebSocketServer = require("ws").Server

// - Please refer Zhomart Mukhamejanov's example if you want to deploy server.js on Heroku

// - Please refer Vidit Mody's use of ws protocol

//var WebSocketServer = require('C:/Users/Henry/AppData/Roaming/npm/node_modules/websocket').server;

var WebSocketServer = require('websocket').server;

var http = require('http');

 

var server = http.createServer(function(request, response) {

    console.log((new Date()) + ' Received request for ' + request.url);

    response.writeHead(404);

    response.end();

});

server.listen(8080, function() {

    console.log((new Date()) + ' Server is listening on port 8080');

});

 

// Create Websocket Serve

wsServer = new WebSocketServer({

    httpServer: server,

    // You should not use autoAcceptConnections for production

    // applications, as it defeats all standard cross-origin protection

    // facilities built into the protocol and the browser.  You should

    // *always* verify the connection's origin and decide whether or not

    // to accept it.

    autoAcceptConnections: false

});

 

function originIsAllowed(origin) {

  // Put logic here to detect whether the

  // specified origin (i.e., client) is allowed.

  return true;

}

 

wsServer.on('request', function(request) {

    if (!originIsAllowed(request.origin)) {

      // Make sure we only accept requests from an allowed origin

      request.reject();

      console.log((new Date()) + ' Connection from origin '

                   + request.origin + ' rejected.');

      return;

    }

 

    var connection = request.accept('echo-protocol', request.origin);

    console.log((new Date()) + ' Connection accepted.');

 

    /////////////////////////////////////////////////////

    // Case 1: rerceive message from the client

    /////////////////////////////////////////////////////
    
    connection.on('message', function(message) {
        if (message.type === "utf8") {
            console.log('Received Message: ' + message.utf8Data);
            var onoff = require('onoff');
            var Gpio = onoff.Gpio;
            // Initialize GPIO 23 to be an output pin.
            var led = new Gpio(4, 'out');
            var interval;

            interval=setInterval(function () {
            var blinkInterval = setInterval(blinkLED, 250);
            function blinkLED() {
                if(led.readSync() === 0) {
                    led.writeSync(1);
                } else {
                led.writeSync(0);
                }
                }
            function endBlink() {
                clearInterval(blinkInterval);
                led.writeSync(0);
                    }
            setTimeout(endBlink, 1000);
                            }, 4000); 
             process.on('SIGINT', function () {
             clearInterval(interval);
             // writeSync(value) write 0 or 1 to GPIO
             led.writeSync(0);
             // Cleanly close the GPIO pin befire existing.
             led.unexport();
             console.log('Bye, bye!');
             process.exit();
             });
             }
             });

    /////////////////////////////////////////////////////

    // Case 2: close the connection

    /////////////////////////////////////////////////////

    connection.on('close', function(reasonCode, description) {

        console.log((new Date()) + ' Peer '

                   + connection.remoteAddress + ' disconnected.');

    });

});
