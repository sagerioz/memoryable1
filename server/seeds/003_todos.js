
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          id: 1,
          user_id: 1,
          list_item: 'Brush Teeth',
          finished: false
        },
        {
          id: 2,
          user_id: 1,
          list_item: 'Change into new clothes',
          finished: true
        },
        {
          id: 3,
          user_id: 1,
          list_item: 'Walk with Sherry',
          finished: false
        },
        {
          id: 4,
          user_id: 1,
          list_item: 'Weed the Garden',
          finished: false
        },
        {
          id: 5,
          user_id: 1,
          list_item: 'Write letter to Anita',
          finished: false
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'todos_id_seq\', (SELECT MAX(id) FROM todos));')
    })
}
