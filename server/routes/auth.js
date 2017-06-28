const express = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config').jwtSecret;
const knex = require('../knex')

const router = express.Router();


router.post('/', (req, res) => {
  console.log("IM IN THE AUTH POST ROUTE");
  const { identifier, password } = req.body;
console.log("REQ BODY SERVER", req.body);
if(identifier && password){
knex('users')
  .where('email', identifier)
  .then(user => {
    console.log("USER HERE?", user[0]);
    if (user) {
      const hash = user[0].password_digest
      const name = user[0].firstName
      const profilePicture = user[0].profilePicture
      const id = user[0].id


      if (bcrypt.compareSync(password, hash)) {
        const token = jwt.sign({
          id: user[0].id,
          username: user[0].userName
        }, jwtSecret);
        console.log("TOKEN=================", token , name);
        res.json({ token: token , name: name, profilePicture: profilePicture, id:id });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
  });
}
});


module.exports = router
