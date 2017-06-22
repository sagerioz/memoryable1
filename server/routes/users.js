var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET users listing. */

router.post('/', function(req, res, next) {
console.log("MADE IT TO POST ROUTE for users");
let firstName = req.body.firstName
let userName = req.body.userName
let email = req.body.email
let profilePicture = req.body.profilePicture
let password_digest = req.body.password_digest

console.log("going into db:", firstName, userName, email, profilePicture, password_digest);
if(userName.length>0){
knex('users')
.returning('firstName')
  .insert({
    firstName: firstName,
    userName: userName,
    email: email,
    profilePicture: profilePicture,
    password_digest: password_digest
  })
  .then(insertedUser => {
    console.log("hello, ", insertedUser[0]);
    res.send(insertedUser[0])
  })
}else{
  res.status(500)
  res.render('error', {
    message: 'please enter valid data'
  })
}
});

module.exports = router;
