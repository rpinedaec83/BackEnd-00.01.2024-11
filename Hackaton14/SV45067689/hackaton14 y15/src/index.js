import express from 'express';
import { User, Package, Location, sequelize} from './models/db.js';
import AuthRoute from './routes/auth.js';
import PackageRoute from './routes/package.js';
import LocationRoute from './routes/location.js';
import PaymentRoute from './routes/payment.js';

import GoogleStrategy from 'passport-google-oauth20';
import passport from 'passport';
import dotenv from 'dotenv';

dotenv.config();

// Socket server
import { createServer } from 'http';
import { Server } from 'socket.io';
import { updateLocationForSocket } from './controllers/locationController.js';




const PORT = process.env.PORT || 4000;
const app = express();

// Socket server envolver la app para que mute y adopte la funcionalidad de los sockets
const server = createServer(app);
const io = new Server(server);

// para poder leeer el body del request en formato JSON
app.use(express.json());
// google AUth
passport.use(new GoogleStrategy.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOne({where: {oAuthId: profile.id}});
        if(user) {
            return done(null, user);
        }
        const newUser = await User.create({
            oAuthId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            password: profile.password
        });
        done(null, newUser);
    } catch (error) {
        done(error, null);
    }
}));

app.use(passport.initialize());

app.get('/api/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
app.get('/api/auth/google/callback', passport.authenticate('google', {failureRedirect: '/api/auth/login'}), (req, res) => {
    res.redirect('http://localhost:3000');
});
//

app.use('/api/auth', AuthRoute);
app.use('/api/package', PackageRoute);
app.use('/api/location', LocationRoute);

// payments
app.use('/api/payment', PaymentRoute)

// escuchar el evento connection
io.on('connection', (socket) => {
    console.log('New connection', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });

    socket.on('updateLocation', (data) => {
        updateLocationForSocket(socket, data);
    });
});

server.listen(PORT,() => {
    console.log('Server is running on port: ', PORT);
})