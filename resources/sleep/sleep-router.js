const router = require('express').Router();

const Users = require('../users/users-model.js');
const SleepDb = require('./sleep-model.js');
const restricted = require('../../middleware/restricted-middleware');

router.post('/', restricted, (req, res) => {
  SleepDb.addSleepData(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', restricted, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(user => {
      SleepDb.getSleepDataByUser(id)
        .then(data => {
          res.status(200).json({ ...user, data });
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', restricted, (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  SleepDb.updateSleepData(id, changes)
    .then(updatedData => {
      res.status(201).json(updatedData);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete('/:id', restricted, (req, res) => {
  const id = req.params.id;

  SleepDb.removeSleepData(id)
    .then(del => {
      res.status(200).json({ message: 'session deleted' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
