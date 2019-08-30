exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'pam@gmail.com',
          parent_name: 'Pam Beesly',
          child_name: 'Cecelia',
          birthday: 1563771600000,
          password: 'Password1!',
        },
      ]);
    });
};
