exports.up = function(knex, Promise) {
  return knex.schema.createTable('scrapbook', function(table) {
    table.increments()
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE')
    table.string('title', 30).notNullable()
    table.string('description', 255)
    table.string('item_image', 255).notNullable()
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scrapbook');
};
