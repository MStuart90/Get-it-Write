require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

//Connect database
connectDB();

// Init middleware(s)
app.use(express.json({ extended: false }));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client/build')));
// app.use(morgan('dev'));
app.get('/',(req, res) => res.send('API Running'));

//Defile routes for users stuff
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});


/*
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/'))
});

// Add Auth and API routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/apiRoutes'));

// If no routes are hit, send the React app
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

// Error handler
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
})

// Passport
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser
app.use(session({
  secret: process.env.AUTH_SECRET,
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}));
*/

//const morgan = require('morgan');
//const session = require('express-session');
//const MongoStore = require('connect-mongo')(session);
//const dbConnection = require('./config/connection');
//const passport = require('./config/passport');