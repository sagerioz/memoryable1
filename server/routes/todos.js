const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all todo items */
router.get('/', function(req, res, next) {
  knex('todos')
  // .where('user_id', userId)
  //   .orderBy('created_at', 'asc')
    .then((todos) => {
      res.send(todos)
    })
})

router.post('/:id', function(req, res, next) {
  let userId = req.params.id
  let todo = req.body.todo
  //let id = req.body.id
  knex('todos')
  // .where('user_id', userId)
  .returning('*')
    .insert({
      list_item: todo,
      user_id: userId
    })
  .then((todo) => {
    console.log(todo);
    //let list = todo.data.todo[0].list_item
    let id = todo.id
    console.log("MADE IT id *****", id);
      res.json({ todo });
  })
})






/* DELETE a todo item */
router.delete('/:id', function(req, res, next) {
  console.log("MADE IT TO delete ROUTE");
  let id = req.params.id
  if(id>0){
  knex('todos')
    .where('id', id)
    .del()
    .then((item) => {
      console.log("deleted it", item);
      //res.redirect('/scrapbook')
    })
  }else{
    res.status(500)
    res.render('error', {
      message: 'please enter valid data'
    })
  }
})


module.exports = router
