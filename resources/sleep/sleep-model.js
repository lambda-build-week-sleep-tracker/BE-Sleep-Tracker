const db = require('../../data/dbConfig.js');

module.exports = {
  addSleepData,
  getSleepDataByUser,
};

function addSleepData(data) {
  return db('sleep').insert(data, 'id');
}

function getSleepDataByUser(id) {
  return db('sleep').where({ 'sleep.user_id': id });
}

// function getByUserId(id) {
//   // return db('favorites').where({ user_id });

//   return db('users')
//     .where({ id })
//     .first();
//   // return db('sleep')
//   //   .where({ id })
//   //   .first();
// }
