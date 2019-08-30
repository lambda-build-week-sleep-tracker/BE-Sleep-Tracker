exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();

    tbl
      .string('email')
      .notNullable()
      .unique();

    tbl.string('parent_name').notNullable();

    tbl.string('child_name').notNullable();

    tbl.integer('birthday').notNullable();

    tbl.string('password').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
