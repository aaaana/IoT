# 1 .Install Required Package on Raspberry Pi 
```
$ npm install websocket 
$ npm install onoff 
$ pigpiod -v
$ sudo apt-get update 
$ sudo apt-get update 
$ sudo apt-get install pigpio
$ npm  install pigpio

```
# 2 .Connecting Raspberry Pi and LED light, button
[Reference](Node.js Raspberry Pi LED and Pushbutton (w3schools.com))
# 3. Prepare Code 
websocket_ledbutton.js
client.html
# 4. Run the project
```
$ node websocket_ledbutton.js
```
Open the client.html file  or Open the website in a browser using http://[RaspberryPi_IP]:8080/: and LED light blinking 

# 5. End the program 
Ctrl+c