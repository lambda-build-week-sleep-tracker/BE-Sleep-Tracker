const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// const authRouter = require('../users/auth-router.js');
// const usersRouter = require('../users/users-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// server.use('/auth', authRouter);
// server.use('/users', usersRouter);

server.get('/', (req, res) => {
  res.send("IT'S ALIVE!!!");
});

module.exports = server;
