import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props) {
    super(props)

    // if (!localStorage.token) {
    //   window.location.href = '/'
    // }
  }

  render() {
      return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <h1 className="Home-title"> <p>Welcome, User</p>
                </h1>
              </div>
              <hr className="navbarHR"/>
            </div>
          </nav>
        </div>
      )
  }
}

export default Navbar
