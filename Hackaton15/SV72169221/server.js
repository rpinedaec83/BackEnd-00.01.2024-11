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
var server = require("http").Server(app);
var io = require("socket.io")(server);
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
        "REPLACE INTO users (correo , password) VALUES ('" +
        email +
        "' , 'oauth')";
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
        socket.on('cliente:manda_mensaje',(data)=>{
            console.log(data)
        })


    })
}

chat_ononline(io)



app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));




