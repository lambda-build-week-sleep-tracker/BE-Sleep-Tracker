exports.up = function(knex) {
  return knex.schema.createTable('sleep', tbl => {
    tbl.increments();

    tbl.integer('sleep_start').notNullable();

    tbl.integer('sleep_end').notNullable();

    tbl
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sleep');
};
