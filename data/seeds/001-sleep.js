exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sleep')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('sleep').insert([
        {
          user_id: 1,
          sleep_start: new Date('July 28, 2019 20:24:00').getTime(),
          sleep_end: new Date('July 29, 2019 06:01:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('July 29, 2019 21:11:00').getTime(),
          sleep_end: new Date('July 30, 2019 07:21:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('July 30, 2019 20:42:00').getTime(),
          sleep_end: new Date('July 31, 2019 06:19:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('July 31, 2019 20:42:00').getTime(),
          sleep_end: new Date('July 31, 2019 23:19:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 1, 2019 20:12:00').getTime(),
          sleep_end: new Date('August 2, 2019 06:12:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 2, 2019 21:32:00').getTime(),
          sleep_end: new Date('August 3, 2019 07:01:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 2, 2019 20:02:00').getTime(),
          sleep_end: new Date('August 3, 2019 05:43:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 3, 2019 21:42:00').getTime(),
          sleep_end: new Date('August 4, 2019 07:31:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 4, 2019 20:52:00').getTime(),
          sleep_end: new Date('August 5, 2019 04:50:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 5, 2019 20:01:00').getTime(),
          sleep_end: new Date('August 6, 2019 05:42:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 6, 2019 19:53:00').getTime(),
          sleep_end: new Date('August 7, 2019 06:42:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 7, 2019 21:02:00').getTime(),
          sleep_end: new Date('August 8, 2019 06:31:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 8, 2019 20:32:00').getTime(),
          sleep_end: new Date('August 9, 2019 06:41:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 9, 2019 12:14:00').getTime(),
          sleep_end: new Date('August 9, 2019 01:52:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 9, 2019 20:32:00').getTime(),
          sleep_end: new Date('August 10, 2019 06:34:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 10, 2019 21:22:00').getTime(),
          sleep_end: new Date('August 11, 2019 06:54:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 11, 2019 22:02:00').getTime(),
          sleep_end: new Date('August 12, 2019 06:32:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 12, 2019 21:08:00').getTime(),
          sleep_end: new Date('August 13, 2019 07:04:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 13, 2019 20:22:00').getTime(),
          sleep_end: new Date('August 14, 2019 06:44:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 14, 2019 21:33:00').getTime(),
          sleep_end: new Date('August 15, 2019 06:44:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 15, 2019 20:02:00').getTime(),
          sleep_end: new Date('August 16, 2019 05:44:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 16, 2019 22:52:00').getTime(),
          sleep_end: new Date('August 17, 2019 07:54:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 17, 2019 20:52:00').getTime(),
          sleep_end: new Date('August 18, 2019 06:33:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 18, 2019 21:02:00').getTime(),
          sleep_end: new Date('August 19, 2019 06:44:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 19, 2019 20:01:00').getTime(),
          sleep_end: new Date('August 20, 2019 05:58:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 20, 2019 21:44:00').getTime(),
          sleep_end: new Date('August 21, 2019 07:34:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 21, 2019 20:55:00').getTime(),
          sleep_end: new Date('August 22, 2019 06:44:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 22, 2019 21:33:00').getTime(),
          sleep_end: new Date('August 23, 2019 07:29:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 23, 2019 20:01:00').getTime(),
          sleep_end: new Date('August 24, 2019 06:00:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 24, 2019 21:42:00').getTime(),
          sleep_end: new Date('August 25, 2019 07:22:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 25, 2019 20:42:00').getTime(),
          sleep_end: new Date('August 26, 2019 06:14:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 26, 2019 19:43:00').getTime(),
          sleep_end: new Date('August 27, 2019 05:04:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 27, 2019 19:52:00').getTime(),
          sleep_end: new Date('August 28, 2019 04:54:00').getTime(),
        },
        {
          user_id: 1,
          sleep_start: new Date('August 20, 2019 20:52:00').getTime(),
          sleep_end: new Date('August 21, 2019 06:04:00').getTime(),
        },
      ]);
    });
};
