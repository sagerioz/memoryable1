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
    firstName: '',
    profilePicture: '',
    errors: {},
    err: null
   }
   }

  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  //
  // isValid() {
  //   const { errors, isValid } = validateInput(this.state);
  //
  //   if (!isValid) {
  //     this.setState({ errors });
  //   }
  //
  //   return isValid;
  // }

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
             firstName: uniqueUser[0].firstName,
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

          <div className="container profileEdit">
    <div className="row">

    <div><button type="button" className="btn btn-default btn-circle btn-lg" data-toggle="modal" data-target="#myModal"><i className="glyphicon glyphicon-ok"></i>  </button>Update Profile
    </div>

    <div><img src={ this.state.profilePicture} /></div>
    <div>{ this.state.firstName }</div>
    <div>{ this.state.userName }</div>
    <div>{ this.state.email }</div>



    <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
    <div className="modal-content">
    <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4 className="modal-title" id="myModalLabel">Update Records</h4>
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
