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

        if (message.type === 'utf8') {

            console.log('Received Message: ' + message.utf8Data);

            connection.sendUTF(message.utf8Data);

        }

        else if (message.type === 'binary') {

            console.log('Received Binary Message of '

                         + message.binaryData.length + ' bytes');

            connection.sendBytes(message.binaryData);

        }

        var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

        var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output

        var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

 

        function blinkLED() { //function to start blinking

          if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)

            LED.writeSync(1); //set pin state to 1 (turn LED on)

          } else {

            LED.writeSync(0); //set pin state to 0 (turn LED off)

          }

        }

 

        function endBlink() { //function to stop blinking

          clearInterval(blinkInterval); // Stop blink intervals

          LED.writeSync(0); // Turn LED off

          LED.unexport(); // Unexport GPIO to free resources

        }

 

        setTimeout(endBlink, 5000); //stop blinking after 5 seconds

    });

 

    /////////////////////////////////////////////////////

    // Case 2: close the connection

    /////////////////////////////////////////////////////

    connection.on('close', function(reasonCode, description) {

        console.log((new Date()) + ' Peer '

                   + connection.remoteAddress + ' disconnected.');

    });

});
