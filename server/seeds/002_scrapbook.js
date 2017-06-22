
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scrapbook').del()
    .then(function () {
      // Inserts seed entries
      return knex('scrapbook').insert([{
      	id:1,
        user_id:1,
        title:'Elizabeth',
        description:'Granddaughter',
      	item_image:'https://thumb7.shutterstock.com/display_pic_with_logo/788569/112762954/stock-photo-the-square-image-of-a-girl-in-retro-handkerchief-112762954.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      },{
      	id:2,
        user_id:1,
        title:'Peter',
        description:'Son',
      	item_image:'http://zurb.com/playground/uploads/upload/upload/192/image-01.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      },
      {
      	id:3,
        user_id:1,
        title:'Michael',
        description:'Grandson',
      	item_image:'http://zurb.com/playground/uploads/upload/upload/194/image-03.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }
    ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('scrapbook_id_seq', (SELECT MAX(id) FROM scrapbook));")
    })
};
