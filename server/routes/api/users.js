const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');//https://express-validator.github.io/docs/
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const User = require('../../../models/User');



// @route   GET api/users
// @desc    Test route
// @access  Public 
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({ min: 6 }),
], 
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //deconstruct the body
    const { name, email, password } = req.body;

    try {
        //See if user exists
        let user = await User.findOne({ email });

        if (user) {
            return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

        //Get users gravatar
        // https://github.com/emerleite/node-gravatar
        
        const avatar = gravatar.url(email, {
            s: '200', //default size
            r: 'pg', //rating to make sure our users don't go blind.
            d: 'mm' //default avatar if user does not have a avatar set
        });

        user = new User({
            name,
            email,
            avatar,
            password
        });

        //Encrypt password
        const salt = await bcrypt.genSalt(15); //15 rounds cause that's how we roll
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        //Return jsonwebtoken
        res.send('User registered');//checking in postman
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;