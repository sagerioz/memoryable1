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
    console.log("INSERTEDUSER", insertedUser);
    const name = insertedUser[0].firstName
    const profile = insertedUser[0].token = token
    const id = insertedUser[0].id
    const pic = insertedUser[0].profilePicture
    console.log("PROFILE", profile);

  //  res.send(insertedUser[0])
    res.json({ success: profile, name: name, id: id, pic: pic });

  })
}else{
  res.json({ err: '500 // There was an Error.' });
}
});


router.patch('/:id', function(req, res, next) {
console.log("MADE IT TO PATCH ROUTE for users");

let id = req.params.id
let firstName = req.body.firstName
let userName = req.body.userName
let email = req.body.email
let password = req.body.password
let profilePicture = req.body.profilePicture

const password_digest = bcrypt.hashSync(password, 10);


console.log("going into db for update:", firstName, userName, email, profilePicture, password_digest);
if(userName.length>0){
knex('users')
.where('id', id)
.returning('*')
  .update({
    firstName: firstName,
    userName: userName,
    email: email,
    profilePicture: profilePicture,
    password_digest: password_digest
  })
  .then(insertedUser => {
    const token = jwt.sign({insertedUser}, 'config.jwtSecret');
    const profile = insertedUser[0].token = token;
    const pic = insertedUser[0].profilePicture;
    const id = insertedUser[0].id;
    const firstName = insertedUser[0].userName;

    //console.log("PROFILE", profile);

  //  res.send(insertedUser[0])
    res.json({ success: profile, profilePicture:pic, id:id, firstname:userName });

  })
}else{
  res.json({ err: '500 // There was an Error.' });
}
});

module.exports = router;
