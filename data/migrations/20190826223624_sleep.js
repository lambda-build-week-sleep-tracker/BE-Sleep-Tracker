exports.up = function(knex) {
  return knex.schema.createTable('sleep', tbl => {
    tbl.increments();

    tbl.string('sleep_time').notNullable();

    tbl.string('awake_time').notNullable();

    tbl.integer('sleep_hours').notNullable();

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
