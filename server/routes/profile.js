const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET profile info  */
router.get('/', function(req, res, next) {
  knex('todos')
    .orderBy('created_at', 'asc')
    .then((todos) => {
      res.send(todos)
    })
})

/* POST a scrapbook item */
// router.post('/', function(req, res, next) {
//   console.log("MADE IT TO POST ROUTE");
//   let title = req.body.title
//   console.log("TITLE", title);
//   let user_id = 1
//   let description = req.body.description
//   let item_image = req.body.item_image
//   if(title.length>0){
//   knex('scrapbook')
//     .insert({
//       title: title,
//       user_id: user_id,
//       item_image: item_image,
//       description: description
//     })
//     .then((item) => {
//       console.log("made it");
//       //res.redirect('/scrapbook')
//     })
//   }else{
//     res.status(500)
//     res.render('error', {
//       message: 'please enter valid data'
//     })
//   }
//})


module.exports = router
