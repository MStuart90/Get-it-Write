const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

const localStrategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(username, password, done) {
		db.User.findOne({ 'email': username }, (err, userMatch) => {
			if (err) {
				return done(err)
			}
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!userMatch.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, userMatch)
		});
	}
);

passport.serializeUser((user, done) => {
	console.log('serialize called');
	// console.log(user); // the whole raw user object!
	done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
	db.User.findOne(
		{ _id: id },
		'firstName lastName email',
		(err, user) => {
			// console.log(user);
			done(null, user);
		}
	);
});

// ==== Register Strategies ====
passport.use(localStrategy);

module.exports = passport;
