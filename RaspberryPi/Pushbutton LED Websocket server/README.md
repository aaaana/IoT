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
[Reference](https://www.w3schools.com/nodejs/nodejs_raspberrypi_led_pushbutton.asp)
# 3. Prepare Code 
websocket_ledbutton.js
client.html
# 4. Run the project
```
$ node websocket_ledbutton.js
```
Open the client.html file  or Open the website in a browser using http://[RaspberryPi_IP]:8080/: and press the button.
* The light is on when pressing the button

# 5. End the program 
Ctrl+c
