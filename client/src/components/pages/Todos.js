import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import $ from 'jquery'
import MyDate from '../date'
import TodoApp from './Todos2'

class Todos extends Component {
  state = {
    todos: [],
  };


  componentDidMount() {
    let userData = ''
    fetch('/api/todos', {
           method: 'GET'
         }).then(res => {
         return res.text().then(todos => {
           todos = JSON.parse(todos)
           this.setState({
             //id: pics,
             todos: todos
            // title: pics,
            // description: pics
           })
            console.log("TODOS", todos);
          })
     })
   }

   renderTodos = () => {
     console.log("TODOS", this.state.todos);
     return this.state.todos.map(function(list) {
       return (
         <list>
           <h2>{list.list_item}</h2>
         </list>
       );
    });
  };
  render() {
      return (
          <div>
          <Navbar />
          <MyDate/ >
          <div className="splash">
          <h1 className="splash">Your todo list</h1>
          </div>

          {this.renderTodos()}

          <TodoApp />
          </div>
      )
  }
}

export default Todos
