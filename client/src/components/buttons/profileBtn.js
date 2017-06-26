import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import Logout from './logoutBtn.js'


class Profile extends Component{
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    window.location.replace('/profile')
  }

  render() {
    return (
      <Nav>


      <div className="dropdown">
          <button className="button-logo-3 dropdown-toggle" type="button" data-toggle="dropdown">

          <NavItem onClick={this.handleClick} className="side-font"><span>Loreley</span>
          <img src="ol_lady.jpg" className="sm-profile"/>
          </NavItem>




          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li><a href="#"><Logout/></a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>





      </Nav>
    )
  }
}

export default Profile
