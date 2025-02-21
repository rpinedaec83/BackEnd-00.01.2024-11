const UserController = require('./controllers/user.controller');

exports.routesConfig=function(app){

    app.post('/users',[
        UserController.insert
    ])
}