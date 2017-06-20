import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';



class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: true,
    //  invalid: true
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
//  window.location.href = '/scrapbook'
}

  render() {
      const { username, email, password, passwordConfirmation, isLoading } = this.state;

      return (
        <form onSubmit={this.onSubmit}>
          <h2>Join our community!</h2>

          <TextFieldGroup
          //  error={errors.username}
            label="Username"
            onChange={this.onChange}
          //  checkUserExists={this.checkUserExists}
            value={this.state.username}
            field="username"
          />

          <TextFieldGroup
            //error={errors.email}
            label="Email"
            onChange={this.onChange}
            //checkUserExists={this.checkUserExists}
            value={this.state.email}
            field="email"
          />

          <TextFieldGroup
            //error={errors.password}
            label="Password"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
            type="password"
          />

          <TextFieldGroup
            //error={errors.passwordConfirmation}
            label="Password Confirmation"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
            type="password"
          />

          <div className="form-group">
            <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>
        </form>
      );
  }
}


export default SignupForm
