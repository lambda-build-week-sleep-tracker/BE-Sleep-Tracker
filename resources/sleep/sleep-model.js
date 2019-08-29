const db = require('../../data/dbConfig.js');

module.exports = {
  addSleepData,
  getSleepDataByUser,
};

function addSleepData(data) {
  // const { sleep_start, sleep_end } = data;
  // let start = new Date(sleep_start).getTime();
  // let end = new Date(sleep_end).getTime();
  // let sleep_hours = (end - start) / (1000 * 3600);
  // console.log(sleep_hours.toFixed(2));

  return db('sleep').insert(data, 'id');
}

function getSleepDataByUser(id) {
  return db('sleep').where({ 'sleep.user_id': id });
}
