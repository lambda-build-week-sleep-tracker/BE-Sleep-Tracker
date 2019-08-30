const router = require('express').Router();

const Users = require('./users-model.js');
// const restricted = require('../middleware/restricted-middleware.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', verifyUserId, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', verifyUserId, (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Users.update(id, changes)
    .then(updatedUser => {
      res.status(201).json(updatedUser);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete('/:id', verifyUserId, (req, res) => {
  const id = req.params.id;

  Users.remove(id)
    .then(deletedUser => {
      const unit = deletedUser > 1 ? 'records' : 'record';
      res.status(200).json({ message: `${deletedUser} ${unit} deleted.` });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ---------------------- Custom Middleware ---------------------- //

function verifyUserId(req, res, next) {
  const id = req.params.id;

  Users.findById(id)
    .then(item => {
      if (item) {
        req.item = item;
        next();
      } else {
        res.status(404).json({ message: 'User Not Found.' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

module.exports = router;
