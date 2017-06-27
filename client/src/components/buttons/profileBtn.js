import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import Logout from './logoutBtn.js'


class Profile extends Component{
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      pic: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
  console.log("LOCAL STORAGE from NAVBAR >>>>>>", localStorage);
  this.setState({ name: localStorage.firstname, pic: localStorage.profilePicture })
  }

  handleClick = () => {
    window.location.replace('/profile')
  }

  render() {
    return (
      <Nav>


      <div className="dropdown">
          <button className="button-logo-3 dropdown-toggle" type="button" data-toggle="dropdown">

          <NavItem onClick={this.handleClick} className="side-font"><span>{ this.state.name }</span>
          <img src={ this.state.pic } className="sm-profile thumb"/>
          </NavItem>




          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li><a href="#"><Logout/></a></li>
            <li className="nudge"><a href="/profile">Profile</a></li>
          </ul>
        </div>





      </Nav>
    )
  }
}

export default Profile
