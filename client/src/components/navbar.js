import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logout from './buttons/logoutBtn.js'
import Profile from './buttons/profileBtn.js'

class Navbar extends Component {
  constructor(props) {
    super(props)

    // if (!localStorage.jwtToken || !localStorage.profile ) {
    //   window.location.href = '/'
    // }

    this.state = {
      name: '',
      pic: ''
    }
  }
  //}

  componentDidMount(){
  console.log("LOCAL STORAGE from NAVBAR >>>>>>", localStorage);
  this.setState({ name: localStorage.firstname, pic: localStorage.profilePicture })
  }



  render() {

      let guestLinks = (
      <div className="container-nav">
      <ul className="nav navbar-nav navbar-right">
      <li><Link to="/scrapbook">Scrapbook</Link></li>
      <li><Link to="/news">News</Link></li>
      <li><Link to="/todos">Todos</Link></li>
      <li className="nudge"><Profile/></li>
      </ul>
      </div>
      )

        return (
          <nav className="navbar navbar-default navbar-fixed-top">


                  <div className="navbar-header">
                      <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a href="/" className="navbar-brand">Memoryable</a>
                  </div>

                  <div id="navbarCollapse" className="collapse navbar-collapse">
                    { guestLinks }
                  </div>

          </nav>
        );
      }
    }


export default Navbar
