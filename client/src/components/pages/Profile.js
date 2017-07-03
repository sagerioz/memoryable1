import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import Modal from '../modal'
import TextFieldGroup from '../common/TextFieldGroup'
import MyDate from '../date'
import validateInput from '../../shared/validations/signup'
import ProfileUpdateForm from '../profile/ProfileForm'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    id: '',
    userName: '',
    email: '',
    firstname: '',
    profilePicture: '',
    errors: {},
    err: null
   }
   }


  componentDidMount() {
    let id = localStorage.id
    let userData = ''
    fetch('/api/profile', {
           method: 'GET'
         }).then(res => {
         return res.text().then(user => {
           user = JSON.parse(user)
           let uniqueUser = user.filter(entry => {
             return entry.id == id
           })
           this.setState({
             id: uniqueUser[0].id,
             userName: uniqueUser[0].userName,
             firstname: uniqueUser[0].firstName,
             profilePicture: uniqueUser[0].profilePicture,
             email: uniqueUser[0].email
           })
            console.log("USER", this.state);
          })
     })
   }


  render() {
      return (
          <div>
          <Navbar />
          <div className="container">
    <div className="splash2 outline-card">
    <div className="profile-container">
        <div className="profile-thumb"><img src={ this.state.profilePicture} /></div>
        <div className="profile-content">
            <h1 className="profile-title">{ this.state.firstname }</h1>
            <h4>Email</h4><span> { this.state.email }</span>
            <h4>Username</h4><span> { this.state.userName }</span>
        </div>
    </div>
    <br/>
    <button type="button" className="button-logo-2" data-toggle="modal" data-target="#myModal">
    Edit
    </button><a href="/scrapbook" className="button-logo-2">Back to photos </a>


    <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
    <div className="modal-content">
    <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h3 className="modal-title" id="myModalLabel">Update Profile</h3>
    </div>
        <div className="modal-body">
        <ProfileUpdateForm />
        </div>
    </div>
    </div>
    </div>

    </div>
    </div>
    </div>
      )
  }
}

export default Profile
