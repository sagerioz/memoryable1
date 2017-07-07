const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET profile info  */
router.get('/', function(req, res, next) {
  knex('users')
    .orderBy('created_at', 'asc')
    .then((todos) => {
      res.send(todos)
    })
})

router.get('/edit/:id', function(req, res, next) {
  let id = req.params.id
  console.log("ID", id);
  knex('users')
  .where('id', id)
    .then((user) => {
      console.log("USER?", user);
      res.send(user)
    })
})



module.exports = router
