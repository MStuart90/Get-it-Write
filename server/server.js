//require('dotenv').config();
//const morgan = require('morgan');
//const session = require('express-session');
//const MongoStore = require('connect-mongo')(session);
//const dbConnection = require('./config/connection');
//const passport = require('./config/passport');
//const path = require('path');

const express = require('express');
const app = express();

app.get('/',(req, res) => res.send('API Running'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});

















/*
// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client/build')));

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