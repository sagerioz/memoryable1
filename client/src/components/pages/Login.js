import React, { Component } from 'react'
import $ from 'jquery';
import SignupForm from '../signup/SignupForm';
import LoginForm from '../login/LoginForm';
import About from '../about';
import Connections from '../connections';


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
    // $(document).on('click', 'a', function(event){
    //     event.preventDefault();
    //
    //     $('html, body').animate({
    //         scrollTop: $( $.attr(this, 'href') ).offset().top
    //     }, 600);
    // });

    var top = document.getElementById('about').clientTop;
  window.scrollTo(0, top);
  }


     popOut() {
          window.open("fb.html", "_blank", "directories=no,toolbar=no,scrollbars=no,resizable=yes,location=no,status=no,top=400,left=400,width=500,height=300");
      }



  render() {

//facebook Oauth link to implement:
      // return (
      //      <button onClick={this.popOut} className="btn">login with facebook</button>
      // )

      return (
<div className="row">
<div className="container">
   <div className="parallax"><h1 className="logo">Memoryable</h1>
     <div className="caption">
     <div><button className="button-logo" data-toggle="modal" data-target="#modal-login">Login with Email</button>
          <button className="button-logo" data-toggle="modal" data-target="#modal-signup">Create an Account</button>
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
    <span className="border span3">
    CONNECTIONS
    </span>
  </div>
</div>

<div>
  <div className="span4">
   <Connections />
  </div>
</div>


<div className="modal fade" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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

<div className="modal fade" id="modal-signup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="modal-header">
<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<h4 className="modal-title" id="myModalLabel">Signup</h4>
</div>
    <div className="modal-body">
    <SignupForm />
    </div>
</div>
</div>
</div>

</div>

</div>
      )
  }
}

export default Login
