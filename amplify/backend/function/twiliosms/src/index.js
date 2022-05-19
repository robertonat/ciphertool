exports.handler = async (event) => {
  const recipient = event.pathParameters.recipient;
  const textmessage = "Your verification code for encryption.com is " + event.pathParameters.message;
  const accountSid = "AC4153f4a48b9ac678e7a598924c89d568";
  const authToken = "d6a0b70be3784c3dfa85003e793fb90f";
  const client = require('twilio')(accountSid, authToken);
  await client.messages.create({
   body: textmessage,
   from: '+19706968810',
   to: recipient
  })

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      },
        body: (event.pathParameters.recipient + event.pathParameters.message),
    };
};
