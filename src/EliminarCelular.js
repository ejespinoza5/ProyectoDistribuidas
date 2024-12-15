const AWS = require('aws-sdk');

exports.EliminarCelular = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {IdCelular}=event.pathParameters;
    await dynamodb.delete({
        TableName: "CelularesNuevos",
        Key:{IdCelular}
    }).promise();

    return {
           status: 200,
           body: ({message:"Tarea borrada"})
        };
};

