
exports.handler = async (event) => {
    console.log(event)
    const userId = event.pathParameters.userId;
    const user = {'userId': userId, 'userName': "User " + userId };
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     },
        body: JSON.stringify(user),
    };
    return response;
};
