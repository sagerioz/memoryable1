import React, { Component } from 'react'
import Navbar from './../navbar'
import $ from 'jquery'
import MyDate from '../date'

class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      todos: []
    }
  //  this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }
  // Lifecycle method
  componentDidMount(){
    // Make HTTP 
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

  render() {
      return (
          <div>
          <div className="splash">
          <h1 className="splash">Your OTHER todo list</h1>
          </div>




          </div>
      )
  }
}


export default TodoApp
