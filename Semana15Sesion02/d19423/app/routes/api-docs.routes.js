const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

module.exports = function(app){

    const swaggerOptions= {
        swaggerDefinition:{
            info:{
                version: "0.00.01",
                title:"Documentacion del api",
                description:"Documentacion del api de login de un proyecto inicial",
                contact:{
                    name: "Roberto Pineda",
                    url:"https://github.com/rpinedaec83"
                },
                servers:["http://localhost:4569"]
            }
        },
        basePath: '/',
        apis:['./auth.routes.js','user.routes.js']
    }
    
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
}
