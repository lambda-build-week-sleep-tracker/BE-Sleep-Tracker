exports.up = function(knex) {
  return knex.schema.createTable('mood', tbl => {
    tbl.increments();

    tbl.integer('rating').notNullable();

    tbl
      .integer('sleep_id')
      .unsigned()
      .references('id')
      .inTable('sleep')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('mood');
};
