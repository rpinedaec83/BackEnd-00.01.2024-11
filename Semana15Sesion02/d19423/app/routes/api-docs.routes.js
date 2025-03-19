
const swaggerUI = require('swagger-ui-express');

const swaggerFile = require('../../swagger_output.json');
module.exports = function(app){
    app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerFile));
}
