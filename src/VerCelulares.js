const AWS = require('aws-sdk');


exports.VerCelulares = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const result = await dynamodb.scan({
        TableName: 'CelularesNuevos',
    }).promise();
    const celular =result.Items;

    return {
           status: 200,
           body: {celular}
        };
};

