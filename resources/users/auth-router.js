const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets.js');

const Users = require('./users-model.js');

// for endpoints beginning with /auth
router.post('/register', validateUserContent, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = generateToken(saved);
      const { id, name, email } = saved;
      res.status(201).json({
        id,
        name,
        email,
        token,
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', validateUserContent, (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // generate token
        const token = generateToken(user);
        const { id, email, name } = user;
        res.status(200).json({ id, email, name, token });
      } else {
        res.status(401).json({ message: 'Invalid Email or Password' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// ---------------------- Generate Token ---------------------- //

function generateToken(user) {
  const payload = {
    subject: user.id, // standard claim = sub
    email: user.email,
  };
  const options = {
    expiresIn: '7d',
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

// ---------------------- Custom Middleware ---------------------- //

function validateUserContent(req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: 'Email & password fields are required.' });
  } else {
    next();
  }
}

module.exports = router;
