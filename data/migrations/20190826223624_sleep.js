exports.up = function(knex) {
  return knex.schema.createTable('sleep', tbl => {
    tbl.increments();

    tbl.integer('sleep_time').notNullable();

    tbl.integer('awake_time').notNullable();

    tbl
      .integer('child_id')
      .unsigned()
      .references('id')
      .inTable('child_bio')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sleep');
};
