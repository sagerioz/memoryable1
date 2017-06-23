import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

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
        <NavItem onClick={this.handleClick} className="sideFont"><span>Hello,Loreley!</span>
        <img src="ol_lady.jpg" className="sm-profile"/>
        </NavItem>
      </Nav>
    )
  }
}

export default Profile
