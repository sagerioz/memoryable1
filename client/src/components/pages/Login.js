import React, { Component } from 'react'
//import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import $ from 'jquery';
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
     this.animate()
   }

  animate() {
    $(document).on('click', 'a', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 600);
    });
  }

  render() {

//old home page layout
      // return (
      //     <div className="row">
      //     <div className="parallax"></div>
      //     <div></div>
      //      <div>
      //      <SignupForm /><LoginForm />
      //      <div className="bg-img2"></div><About />
      //      <div className="bg-img5"></div>
      //      </div>
      //     </div>
      // )

      return (
<div>
   <div className="parallax"><h1 className="logo">Memoryable</h1>


   <div className="caption">
     <div><button className="button-logo" data-toggle="modal" data-target="#myModal">Login with Email</button>
          <button className="button-logo">Create an Account</button>
          <a href="#about" className="button-logo" onClick={this.animate}>About this Site</a>
    </div>
   </div>
   </div>

<div className="login">
  <h3 className="login-h3">About</h3>

</div>

<div className="bgimg-2">
  <div className="caption">
    <span className="border span1" id="about">ABOUT</span>
  </div>
</div>

<div className="relative">
  <div className="span2"><h3 className="login-h3">THE PURPOSE</h3>
    <About />
  </div>
</div>

<div className="bgimg-3">
  <div className="caption">
    <span className="border span3">ACTIVITIES</span>
  </div>
</div>

<div className="relative">
  <div className="span4">
    <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
  </div>
</div>

<div className="bgimg-1">
  <div className="caption">
    <span className="border">CONNECTIONS</span>
  </div>

</div>




<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="modal-header">
<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<h4 className="modal-title" id="myModalLabel">Login</h4>
</div>
    <div className="modal-body">
    <LoginForm />
    </div>
</div>
</div>
</div>













</div>
      )
  }
}

export default Login
