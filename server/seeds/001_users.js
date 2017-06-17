
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,
          firstName: 'Loreley',
          userName: 'Loreley123',
          profilePicture: 'https://s15-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTBAjsKDw1AEJ4CRjUW7XhMSECp2cnXwTKU422akArHI-mCJ9K8_g&sp=8fd404ec7d924a42076009acfd6a2755&anticache=690815',
          email: 'loreley@yahoo.com',
          password_digest: '$2a$10$Lzwvx96PLF4GTl68nX8mTu05foFHHj6FtG4NVONY54NmpHHlQO5HS',
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users));')
    })
}
