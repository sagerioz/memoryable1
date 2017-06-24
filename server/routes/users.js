const express = require('express')
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//const config = require('../config');

/* GET users listing. */

router.post('/', function(req, res, next) {
console.log("MADE IT TO POST ROUTE for users");
let firstName = req.body.firstName
let userName = req.body.userName
let email = req.body.email
let password = req.body.password
let profilePicture = req.body.profilePicture

const password_digest = bcrypt.hashSync(password, 10);


console.log("going into db:", firstName, userName, email, profilePicture, password_digest);
if(userName.length>0){
knex('users')
.returning('*')
  .insert({
    firstName: firstName,
    userName: userName,
    email: email,
    profilePicture: profilePicture,
    password_digest: password_digest
  })
  .then(insertedUser => {
    const token = jwt.sign({insertedUser}, 'config.jwtSecret');
    const profile = insertedUser[0].token = token;
    console.log("PROFILE", profile);

  //  res.send(insertedUser[0])
    res.json({ success: profile });

  })
}else{
  res.json({ err: '500 // There was an Error.' });
}
});

module.exports = router;
