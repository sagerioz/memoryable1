const express = require('express')
const bcrypt = 'bcrypt';
const jwt = 'jsonwebtoken';
const config = '../config';
const knex = require('../knex')

const router = express.Router();


router.post('/', (req, res) => {
  console.log("IM IN THE AUTH POST ROUTE");
  const { identifier, password } = req.body;
console.log("REQ BODY SERVER", req.body);

knex('users')
  .where('email', identifier)
  .then(user => {
    console.log("USER HERE?", user[0]);
    if (user) {
      if (bcrypt.compareSync(password, user[0].password_digest)) {
        const token = jwt.sign({
          id: user[0].id,
          username: user[0].userName
        }, config.jwtSecret);
        console.log("TOKEN", token);
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
  });
});


module.exports = router
