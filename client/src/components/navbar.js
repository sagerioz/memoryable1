import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logout from './buttons/logoutBtn.js'
import Profile from './buttons/profileBtn.js'

class Navbar extends Component {
  constructor(props) {
    super(props)

    // if (!localStorage.token) {
    //   window.location.href = '/'
    // }
  }

  render() {

        let guestLinks = (
          <ul className="nav navbar-nav navbar-right">
           <li><Profile/></li>
            <li><Link to="/scrapbook">Scrapbook</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/todos">Todo List</Link></li>
            <li><Logout/></li>

          </ul>
        )

        return (
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">Memoryable</Link>
              </div>

              <div className="collapse navbar-collapse">
                { guestLinks }
              </div>
            </div>
          </nav>
        );
      }
    }


export default Navbar
