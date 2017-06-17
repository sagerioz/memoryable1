// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
// //  res.send('respond with a resource');
// res.json([{
//   	id: 1,
//   	username: "samsepi0l"
//   }, {
//   	id: 2,
//   	username: "D0loresH4ze"
//   }]);
// });
//
// module.exports = router;

const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* create new user */
router.post('/', function(req, res, next) {
  let user = req.body
  knex('users')
    .where('userName', user.userName)
    .then((searchedUser) => {
      if (searchedUser.length > 0) {
        res.send([searchedUser[0].fullName, searchedUser[0].profilePicture, searchedUser[0].id])
      } else {
        knex('users')
        .insert(user)
        .then(insertedUser => {
          res.send(insertedUser[0].fullName)
        })
      }
    })
})

module.exports = router
