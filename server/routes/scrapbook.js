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


module.exports = router
