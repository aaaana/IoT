const AWS = require('aws-sdk')
const Fs = require('fs')

const Polly = new AWS.Polly({
accessKeyId: 'AKIARZ3VU3SDHKYPLZOL',
secretAccessKey: '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',
signatureVersion: 'v4',
region: 'us-west-1'
});

const input = {
Text: "Hi! My name is Kimberly. I will read any text you type here",
OutputFormat: "mp3",
VoiceId: "Kimberly",
}
Polly.synthesizeSpeech(input, (err, data) => {
 if (err) {
    console.log(err);
 } else if (data) {
   if (data.AudioStream instanceof Buffer) {
     Fs.writeFile("./temperature.mp3", data.AudioStream, function(err) {const AWS = require('aws-sdk')
const Fs = require('fs')

const Polly = new AWS.Polly({
accessKeyId: 'AKIARZ3VU3SDHKYPLZOL',
secretAccessKey: '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',
signatureVersion: 'v4',
region: 'us-west-1'
});

const input = {
Text: "Hi! My name is Kimberly. I will read any text you type here",
OutputFormat: "mp3",
VoiceId: "Kimberly",
}
Polly.synthesizeSpeech(input, (err, data) => {
 if (err) {
    console.log(err);
 } else if (data) {
   if (data.AudioStream instanceof Buffer) {
     Fs.writeFile("./temperature.mp3", data.AudioStream, function(err) {
       if (err) {
         return console.log(err)
       }
       console.log("temperature.mp3 file was saved!")
     })
  }
 }
});
       if (err) {
         return console.log(err)
       }
       console.log("temperature.mp3 file was saved!")
     })
  }
 }
});
