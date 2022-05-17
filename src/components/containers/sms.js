// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const express = require('express');
const cors = require('cors');
require('dotenv');
const accountSid = "AC4153f4a48b9ac678e7a598924c89d568";
const authToken = "d6a0b70be3784c3dfa85003e793fb90f";
const bodyText = "This is your authentication code "
const userPhone = "+13479684013"


const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

client.messages
  .create({
     body: (bodyText + verificationCode),
     from: '+19706968810',
     to: (userPhone)
   })
  .then(message => console.log(message.sid));

export {verificationCode};
