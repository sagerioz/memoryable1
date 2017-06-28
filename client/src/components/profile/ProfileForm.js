import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../shared/validations/signup';

class ProfileUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log("USERDATA in CLIENT onSubmit", userData);
    console.log("state", this.state);

    e.preventDefault();
    fetch('/api/users', {
      method: 'POST',
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

    localStorage.setItem('profile', data.success);
  //  localStorage.profile = data.success;
console.log("LOCAL STORAGE   ......", localStorage);
     window.location.href = '/scrapbook';
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
          <h2>Update Profile</h2>
          {this.state.err ? <p>{this.state.err}</p> : null}

          <TextFieldGroup
            error={errors.firstName}
            label="Name to be used for your patient"
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
            error={errors.password}
            label="Password"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
            type="password"
          />

          <TextFieldGroup
            error={errors.passwordConfirmation}
            label="Password Confirmation"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
            type="password"
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
          </div>

        </form>
      );
  }
}

ProfileUpdateForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

export default ProfileUpdateForm
