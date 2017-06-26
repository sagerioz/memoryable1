import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import Modal from '../modal'

class Profile extends Component {
  state = {
    todos: [],
  };


  componentDidMount() {
    // let userData = ''
    // fetch('/api/todos', {
    //        method: 'GET'
    //      }).then(res => {
    //      return res.text().then(todos => {
    //        todos = JSON.parse(todos)
    //        this.setState({
    //          //id: pics,
    //          todos: todos
    //         // title: pics,
    //         // description: pics
    //        })
    //         console.log("TODOS", todos);
    //       })
    // })
   }

   renderTodos = () => {

  };
  render() {
      return (
          <div>
          <Navbar />

          <div className="splash">
          <h1 className="splash">Your profile</h1>
          </div>


<Modal />
          </div>
      )
  }
}

export default Profile
