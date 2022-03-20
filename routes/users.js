const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',

  // checking that there is name, email and password / validation
  [
    body('name', 'name is required').not().isEmpty(),
    body('email', 'please include a valid email').isEmail(),
    body(
      'password',
      'Please enter a password with atleast 6 characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('passed');

    /*  User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then(user => res.json(user)); */
  }
);

module.exports = router;
