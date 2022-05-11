// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "AC4153f4a48b9ac678e7a598924c89d568";
const authToken = "d6a0b70be3784c3dfa85003e793fb90f";
require('dotenv');
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19706968810',
     to: '+13479684013'
   })
  .then(message => console.log(message.sid));
