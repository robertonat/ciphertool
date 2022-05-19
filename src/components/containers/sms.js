// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
/*const express = require('express');
const cors = require('cors');
require('dotenv');
const accountSid = "AC4153f4a48b9ac678e7a598924c89d568";
const authToken = "d6a0b70be3784c3dfa85003e793fb90f";
const bodyText = "This is your authentication code "
const userPhone = "+13479684013"
const twilioPhone = '+19706968810'

const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+19706968810' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))*/


const testmessage ='sms.js is working at the moment'
const accountSid = "AC4153f4a48b9ac678e7a598924c89d568";
const authToken = "d6a0b70be3784c3dfa85003e793fb90f";
const twilioPhone = '+19706968810'
const testrecipient = '+13479684013'

const client = require('twilio')(accountSid, authToken);
client.messages.create({
        body: 'Hello from Lambda!',
        to: '+13479684013',  // your phone number
        from: '+19706968810' // a valid Twilio number
    })
