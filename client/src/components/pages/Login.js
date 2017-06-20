import React, { Component } from 'react'
import Navbar from './../navbar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import ScrapbookForm from '../scrapbook/ScrapbookForm';
import SignupForm from '../signup/SignupForm';
import TrashScrapbookItem from '../buttons/deleteBtn.js'
import MyDate from '../date'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount(){

   }


  render() {


      return (
          <div>
            <h1>Memoryable</h1>
           <div>
           <SignupForm />
           </div>
          </div>
      )
  }
}

export default Login
