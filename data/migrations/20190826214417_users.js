exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();

    tbl
      .string('email', 254)
      .notNullable()
      .unique();

    tbl.string('name').notNullable();

    tbl.string('password', 254).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
