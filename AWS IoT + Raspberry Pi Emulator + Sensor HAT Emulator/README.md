
# AWS IoT + Raspberry Pi Sense HAT Emulator

**[Raspberry Pi Sensor Emulators + AWS IoT](https://docs.google.com/presentation/d/1X90MZ8N0YQwOrfA0yt6tzqG3EsX0rmg1urKfE_gPSj0/edit?usp=sharing)**


## Introduction

This project is to use Raspberry Pi Sense HAT Emulator to get real-time temperature data and send the data to AWS by connect the Raspberry Pi Device to AWS IoT.

## Design
* Install VirtualBox 
* Setup Raspberry Pi on Virtualbox
* Sense HAT Emulator
* Connect AWS
* Modify code for testing
* Run the code

## Implementation
* Build in Sense HAT Emulator in Python in AWS IoT
* Modify testing sample code: pubsub-myrun.py
```
$ pubsub-myrun.py

```
## Run the code 
```
$ python3 aws-iot-device-sdk-python-v2/samples/pubsub-myrun.py --endpoint a3pn1tqs69q0fb-ats.iot.us-east-1.amazon.com --ca_file root-CA.crt --cert sensoHat.cert.pem --key sensoHat.private.key
```

## Reference
* Downloads – Oracle VM VirtualBox
* Configuring IoT devices to AWS IoT (sfbu.edu)
* Sense HAT emulator: testing out sensor code in Raspbian — The MagPi magazine (raspberrypi.com)
* Developing a sensor subscriber (sfbu.edu)

