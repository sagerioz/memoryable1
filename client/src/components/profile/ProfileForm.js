import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../shared/validations/signup';

class ProfileUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      userName: '',
      email: '',
      profilePicture: '',
      password: '',
      err: null,
      errors: {},
      isLoading: false
    //  invalid: true
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.checkUserExists = this.checkUserExists.bind(this);
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
             firstName: uniqueUser[0].firstName,
             profilePicture: uniqueUser[0].profilePicture,
             email: uniqueUser[0].email
           })
            console.log("USER", this.state);
          })
     })
   }






  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    let userData = this.state
    console.log("USERDATA in CLIENT onSubmit for profile PATCH", userData);
    console.log("state", this.state);

    e.preventDefault();
    fetch('/api/users/' + this.state.id, {
      method: 'PATCH',
      body: JSON.stringify(userData),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  })
  .then((res) => res.json())
  .then((data) => {

    console.log("DATA", data);

    if (data.success) {
      this.componentDidMount();
      //window.localStorage.clear();
      //window.location.replace('/')
    //localStorage.setItem('profile', data.success);
  //  localStorage.profile = data.success;
   console.log("LOCAL STORAGE   ......", localStorage);
 // const path = `/profile/${this.state.id}`
 // this.context.router.push(path);

   //browserHistory.push(path)
   console.log("SUCCESS IN EDIT PROFILE");
    }

    if (data.err) {
      this.setState({ err: data.err })
    }
  })


}

  render() {
      const { firstName, userName, email, password, passwordConfirmation, profilePicture, isLoading, errors } = this.state;

      return (

        <form onSubmit={this.onSubmit}>
          {this.state.err ? <p>{this.state.err}</p> : null}

          <TextFieldGroup
            error={errors.firstName}
            label="Name"
            onChange={this.onChange}
          //  checkUserExists={this.checkUserExists}
            value={this.state.firstName}
            field="firstName"
          />

          <TextFieldGroup
            error={errors.username}
            label="Username"
            onChange={this.onChange}
          //  checkUserExists={this.checkUserExists}
            value={this.state.userName}
            field="userName"
          />

          <TextFieldGroup
            error={errors.email}
            label="Email"
            onChange={this.onChange}
            //checkUserExists={this.checkUserExists}
            value={this.state.email}
            field="email"
          />

          <TextFieldGroup
            //error={errors.password}
            label="Profile photo"
            onChange={this.onChange}
            value={this.state.profilePicture}
            field="profilePicture"
          />

          <div className="form-group">
            <button className="button-logo-2">
              Update
            </button>

            <button type="button" className="button-logo-2" data-dismiss="modal">
              Cancel
            </button>

          </div>



        </form>
      );
  }
}

ProfileUpdateForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired,
}
// ProfileUpdateForm.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

export default ProfileUpdateForm
