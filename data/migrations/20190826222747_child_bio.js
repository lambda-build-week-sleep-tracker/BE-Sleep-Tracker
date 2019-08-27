exports.up = function(knex) {
  return knex.schema.createTable('child_bio', tbl => {
    tbl.increments();

    tbl.string('name').notNullable();

    tbl.string('birthday').notNullable();

    tbl
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('child_bio');
};
