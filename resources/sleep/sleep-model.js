const db = require('../../data/dbConfig.js');

module.exports = {
  addSleepData,
  getSleepDataByUser,
  updateSleepData,
  removeSleepData,
};

// function addSleepData(data) {
//   return db('sleep').insert(data, 'id');
// }

async function addSleepData(data) {
  const [id] = await db('sleep').insert(data, 'id');

  return getSleepDataByUser(id);
}

function getSleepDataByUser(id) {
  return db('sleep').where({ 'sleep.user_id': id });
}

function updateSleepData(id, changes) {
  return db('sleep')
    .where({ id })
    .update(changes);
}

function removeSleepData(id) {
  return db('sleep')
    .where({ id })
    .delete();
}
