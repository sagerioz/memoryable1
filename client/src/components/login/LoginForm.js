import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';
import axios from 'axios';
import validateInput from '../../shared/validations/login';
import { connect } from 'react-redux';
//import { login } from '../../actions/authActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // login(data) {
  //   return dispatch => {
  //     return axios.post('/api/auth', data).then(res => {
  //       console.log("login route worked!!");
  //       const token = res.data.token;
  //       localStorage.setItem('jwtToken', token);
  //       setAuthorizationToken(token);
  //       dispatch(setCurrentUser(jwtDecode(token)));
  //     });
  //   }
  // }


  onSubmit(e) {
    e.preventDefault();
    let userData = this.state
    console.log("USERDATA in CLIENT onSubmit for LOGIN", userData);
    console.log("state", this.state);

     window.location.href = '/scrapbook'
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Login</h2>

        <TextFieldGroup
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
      </form>
    );
  }
}

// LoginForm.propTypes = {
//   login: React.PropTypes.func.isRequired
// }
//
// LoginForm.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

export default LoginForm
