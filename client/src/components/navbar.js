import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Navbar extends Component {
  constructor(props) {
    super(props)

    // if (!localStorage.token) {
    //   window.location.href = '/'
    // }
  }

  render() {

        let userLinks = (
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Logout</a></li>
          </ul>
        )

        let guestLinks = (
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/todos">Todo List</Link></li>

          </ul>
        )

        return (
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/scrapbook" className="navbar-brand">Memoryable</Link>
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
