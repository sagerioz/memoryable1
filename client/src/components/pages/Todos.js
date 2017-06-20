import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import $ from 'jquery'


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
          <h1>Your todos</h1>
          {this.renderTodos()}

          </div>
      )
  }
}

export default Todos
