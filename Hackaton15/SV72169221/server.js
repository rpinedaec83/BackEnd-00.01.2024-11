require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const path = require("path");
var con = require("./database/db");
var bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4000;
let email="";

const http = require('http');
const {Server} = require('socket.io');
const server = http.createServer(app);
const io = new Server(server)


// Configurar sesión
app.use(session({ secret: "secreto", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Configurar estrategia de Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Ruta principal (muestra el botón de login)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Ruta para iniciar sesión con Google
app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// Ruta de callback de Google OAuth
app.get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        console.log(req.user._json.email);
        email = req.user._json.email;
        
        var sql =
        "REPLACE INTO users (correo , password) VALUES ('" +email +"' , 'oauth')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        //console.log("1 record inserted");
    });
    req.session.user = email;
    username = email;
        res.redirect("/chat"); // Redirige al chat después de autenticarse
    }
);

// Ruta protegida para el chat (requiere autenticación)
app.get("/chat", (req, res) => {
    if (!req.isAuthenticated()) return res.redirect("/");
    res.sendFile(path.join(__dirname, "public", "chat.html"));
});

app.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/");
    });
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));


function chat_ononline(io){
    io.on('connection',(socket)=>{
        const cargarpedidos= ()=>{
            let sql =
            "SELECT * FROM pedidos";
            con.query(sql, function (err, result) {
            if (err) throw err;
            //console.log("1 record inserted");
            io.emit('server:mandarpaquetes',result)
            console.log(result[0].paquete);
            console.log(result[0]['ubicación'])
            })
            
        }
        cargarpedidos();


        socket.on('cliente:manda_mensaje',(data)=>{
            console.log(data);
            let sql =
            "REPLACE INTO mensajes (message , user) VALUES ('" +data +"' , '" +email +"')";
            con.query(sql, function (err, result) {
            if (err) throw err;
            //console.log("1 record inserted");
            })



        })

        socket.on('cliente:manda_paquete',(data)=>{
            console.log(data);
            let value=1;
            let sql =
            "REPLACE INTO pedidos (paquete , ubicación , correo, Estado) VALUES ('" +data[0] +"' , '" +data[1] +"','" +email +"','" +value +"')";
            con.query(sql, function (err, result) {
            if (err) throw err;
            //console.log("1 record inserted");
            })
            
        })

        


    })
}

chat_ononline(io)



server.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));




