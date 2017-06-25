import React, { Component } from 'react'
//import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import $ from 'jquery'
//import ScrapbookForm from '../scrapbook/ScrapbookForm';
import SignupForm from '../signup/SignupForm';
import LoginForm from '../login/LoginForm';
import About from '../about';


//import TrashScrapbookItem from '../buttons/deleteBtn.js'
//import MyDate from '../date'

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
          <div className="row">
          <div className="parallax"></div>
          <div></div>
           <div>
           <SignupForm /><LoginForm />
           <div className="bg-img2"></div><About />
           <div className="bg-img5"></div>
           </div>
          </div>
      )
  }
}

export default Login
