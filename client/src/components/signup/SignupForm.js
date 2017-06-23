import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../shared/validations/signup';
import FlashMessage from '../flash/FlashMessage';


class SignupForm extends React.Component {
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
  //  localStorage.setItem('profile', JSON.stringify(data.success));

  //  localStorage.profile = data.success;
console.log("LOCAL STORAGE   ......", localStorage);
     window.location.href = '/scrapbook';
    }

    if (data.err) {
      this.setState({ err: data.err })
    }

    //console.log("signup response",res);
  })


}

  render() {
      const { firstName, userName, email, password, passwordConfirmation, profilePicture, isLoading, errors } = this.state;

      return (
        <form onSubmit={this.onSubmit}>
          <h2>Join our community!</h2>

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
            <button className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>
        </form>
      );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

export default SignupForm
