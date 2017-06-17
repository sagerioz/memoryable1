exports.up = function(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments()
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE')
    table.text('list_item').notNullable()
    table.boolean('finished').defaultTo(false)
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('todos')
}
