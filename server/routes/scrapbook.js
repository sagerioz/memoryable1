const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all scrapbook items */
router.get('/', function(req, res, next) {
  knex('scrapbook')
    .orderBy('created_at', 'asc')
    .then((pics) => {
      res.send(pics)
    })
})

router.get('/:id', function(req, res, next) {
  let id = req.params.id
  console.log('here', id)
  knex('scrapbook')
    .where('id', id)
    .then((pic) => {
      res.send(pic)
    })
})


/* PATCH a scrapbook item */
router.patch('/:id', function(req, res, next) {
  let user_id = req.params.id
  knex('scrapbook')
  .returning(['id', 'title', 'user_id'])
  .where('id', req.params.id)
  .update({
    title: req.body.title,
    description: req.body.description,
    item_image: req.body.item_image
  })
  .then((photo) => {
    res.send(photo)
  })
})


/* POST a scrapbook item */
router.post('/', function(req, res, next) {
  console.log("MADE IT TO POST ROUTE req body", req.body);
  let title = req.body.title
  console.log("TITLE", title);
  let user_id = req.body.id
  let description = req.body.description
  let item_image = req.body.item_image
  if(title.length>0){
  knex('scrapbook')
    .insert({
      title: title,
      user_id: user_id,
      item_image: item_image,
      description: description
    })
    .then((item) => {
      console.log("made it");
      //res.redirect('/scrapbook')
    })
  }else{
    res.status(500)
    res.render('error', {
      message: 'please enter valid data'
    })
  }
})

/* DELETE one entry */
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  knex('scrapbook')
    .where('id', id)
    .del()
    .then((entry) => {
      res.sendStatus(200)
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router
