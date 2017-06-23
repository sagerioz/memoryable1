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
//           <nav class="navbar navbar-default navbar-fixed-top">
//   <div class="container">
  <ul className="nav navbar-nav navbar-right">
    <li><Link to="/scrapbook">Scrapbook</Link></li>
    <li><Link to="/news">News</Link></li>
    <li><Link to="/todos">Todos</Link></li>
    <li><Logout/></li>
    <li><Profile/></li>

  </ul>
//   </div>
// </nav>

       )

        return (
          // <nav className="navbar navbar-default">
          //   <div className="container-fluid">
          //     <div className="navbar-header">
          //       <Link to="/" className="navbar-brand">Memoryable</Link>
          //     </div>
          //
          //     <div className="collapse navbar-collapse">
          //       { guestLinks }
          //     </div>
          //   </div>
          // </nav>



          <nav className="navbar navbar-default navbar-static-top">
              <div className="container">


                  <div className="navbar-header">
                      <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a href="#" clasNames="navbar-brand">Brand</a>
                  </div>

                  <div id="navbarCollapse" className="collapse navbar-collapse">
                    { guestLinks }
                  </div>
              </div>
          </nav>









        );
      }
    }


export default Navbar
