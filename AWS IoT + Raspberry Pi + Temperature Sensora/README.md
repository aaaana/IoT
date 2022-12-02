# Using Amazon Polly to make your sensor speak
## Access the AWS IAM dashboard on [aws iam](http://console.aws.amazon.com/iam/)
 
### Now you can configure your user to give permission to access Amazon Polly. 
* Select attach existing policies and type “polly” in search area, select and attach
* User created successfully, download the .csv file for records
* copy the AWS access key ID from your IAM user. You can find it under the Security credentials tab. You can create an AWS access key if you don't have it. This AWS access key ID will be used in our program.

## Prepare AWS SDK for JavaScript/Node.js to access Amazon Polly

```
$ mkdir ml 
$ cd ml/ 
```
* Install node.js and npm:
```
$ sudo apt update 
$ sudo apt install nodejs
$ node –v
$ sudo apt install npm 
$ npm install aws-sdk –save
$ npm init
```
### We will use the Polly object to access AWS Polly from Node.js. 
* You can read more information about the [Polly object] on (https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Polly.html) . We pass our AWS access key ID to perform AWS authentication.
* To convert from text-to-speech, we can call Polly.synthesizeSpeech(). From this process, we can save the result into an MP3 file.
* Go to Amazon Polly Documentation to learn more about the [Request body structure](https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html)
* Go to aws console -> Services -> All Services -> Amazon Polly -> Try Polly Select and try your desired VoiceId, languages and so on

## Create Test Code
* Create and edit aws-polly-demo.js
* Change the credentials and Input values 
```
const Polly = new AWS.Polly(
{ accessKeyId: 'xxxxx', 
secretAccessKey: xxxxx', 
signatureVersion: 'v4', 
region: 'us-east-1' }); 
const input = { 
Text: "Hello, this is a test for temperature records", 
OutputFormat: "mp3", 
VoiceId: "xxx",
}
 
```
* Save this program and run it using the following command: 
```
$ node aws-polly-demo.js
```
* You should see the MP3 file from the executing result. You can see the program output that is shown in the following screenshot. Try to play that MP3 file.
 

## Use node-speaker library 
### Install node-speaker library with npm 
```
$ npm install speaker

```
* if get some errors installing package – [info from](https://github.com/TooTallNate/node-speaker), try:
```
$ sudo apt-get install libasound2-dev
```
* Install speaker again
```
$ npm install speaker
```

### Create the sensor-speaker.js file 
[Code source](https://hc.labnet.sfbu.edu/~henry/npu/classes//iot/learning_aws_iot/slide/Developing_a_program_for_Amazon_Polly.html)
* Create and modify sensor-speaker.js file 
```
// Create a Polly client 
const Polly = new AWS.Polly({ 
accessKeyId: 'xxxxxxx', 
secretAccessKey: xxxxxxx',
 signatureVersion: 'v4', 
region: 'us-west-1' 
}); 

// Create the Speaker instance 
const Player = new Speaker({ 
channels: 1, 
bitDepth: 16, 
sampleRate: 16000
 //channels: 2, // 2 channels 
//bitDepth: 16, // 16-bit samples

//sampleRate: 44100  // 44,100 Hz sample rate
 }) 
let params = { 
Text: 'Hi, this is a test for nodejs speaker', 
OutputFormat: 'pcm',
 VoiceId: 'Joanna',
}
```
* Listen the text input!
## References:
[aws poly](https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html)
[Developing a program for Amazon Polly](https://hc.labnet.sfbu.edu/~henry/npu/classes//iot/learning_aws_iot/slide/Developing_a_program_for_Amazon_Polly.html)


