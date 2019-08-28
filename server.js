const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./resources/users/auth-router.js');
const usersRouter = require('./resources/users/users-router.js');
const sleepRouter = require('./resources/sleep/sleep-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/auth', authRouter);
server.use('/users', usersRouter);
server.use('/api/sleep', sleepRouter);

// sanity check
server.get('/', (req, res) => {
  res.json({ server: 'running' });
});

module.exports = server;
