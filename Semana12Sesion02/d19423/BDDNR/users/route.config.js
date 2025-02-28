const UserController = require('./controllers/user.controller');

exports.routesConfig=function(app){

    app.post('/users',[
        UserController.insert
    ])
    app.get('/users',[
        UserController.list
    ])
    app.get('/users/:userId'[
        UserController.getById
    ])
}