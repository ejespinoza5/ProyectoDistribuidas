const { v4 } = require('uuid');
const AWS = require('aws-sdk');
exports.IngresarCelular = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { marca, modelo, color, almacenamiento, ram, sistemaOperativo, pantalla, camara, bateria, precio, stock } = JSON.parse(event.body);
    const createAT = new Date();
    const IdCelular = v4();
    const newCellphone = {
        IdCelular,
        marca,
        modelo,
        color,
        almacenamiento,
        ram,
        sistemaOperativo,
        pantalla,
        camara,
        bateria,
        precio,
        stock,
        createAT,
    }
    await dynamodb.put({
        TableName: 'CelularesNuevos',
        Item: newCellphone,
    }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(newCellphone),
    };
};

