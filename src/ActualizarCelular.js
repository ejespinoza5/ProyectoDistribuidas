const AWS = require('aws-sdk');
exports.ActualizarCelular = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { IdCelular } = event.pathParameters; 
    const { marca, modelo, color, almacenamiento, ram, sistemaOperativo, pantalla, camara, bateria, precio, stock } = JSON.parse(event.body);
    await dynamodb.update({
        TableName: 'CelularesNuevos',
        Key: { IdCelular }, 
        UpdateExpression: "set marca = :marca, modelo = :modelo, color = :color, almacenamiento = :almacenamiento, ram = :ram, sistemaOperativo = :sistemaOperativo, pantalla = :pantalla, camara = :camara, bateria = :bateria, precio = :precio, stock = :stock", 
        ExpressionAttributeValues: {
            ":marca": marca,
            ":modelo": modelo,
            ":color": color,
            ":almacenamiento": almacenamiento,
            ":ram": ram,
            ":sistemaOperativo": sistemaOperativo,
            ":pantalla": pantalla,
            ":camara": camara,
            ":bateria": bateria,
            ":precio": precio,
            ":stock": stock,
        },
        ReturnValues: "ALL_NEW",
    }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Datos actualizados correctamente" }),
    };
};
