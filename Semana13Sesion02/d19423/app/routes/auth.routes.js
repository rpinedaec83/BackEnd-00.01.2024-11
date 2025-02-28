const userController = require('../controllers/auth.controller')
const {verifySignUp}=require('../middelwares');


module.exports = function(app){

    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        )
        next();
    })

    app.post("/api/auth/singup",[
        verifySignUp.checkDuplicateUsernameOrEmail, 
        verifySignUp.checkRolesExited],
    userController.signup)
}