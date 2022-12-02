const AWS = require('aws-sdk');
const Stream = require('stream');
const Speaker = require('speaker');



// Create an Polly client
const Polly = new AWS.Polly({
accessKeyId: 'AKIARZ3VU3SDHKYPLZOL',
secretAccessKey: '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',
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
 //sampleRate: 44100 // 44,100 Hz sample rate
})
let params = {
 Text: 'Hi, this is a test for nodejs speaker',
 OutputFormat: 'pcm',
 VoiceId: 'Joanna'
}

Polly.synthesizeSpeech(params, (err, data) => {
 if (err) {
    console.log(err.code);
 } else if (data) {
   if (data.AudioStream instanceof Buffer) {
   // Initiate the source
   var bufferStream = new Stream.PassThrough()
   // convert AudioStream into a readable stream
   bufferStream.end(data.AudioStream)
   // Pipe into Player
   bufferStream.pipe(Player)
  }
 }
});
