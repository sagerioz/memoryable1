import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';
import axios from 'axios';
import validateInput from '../../shared/validations/login';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import { connect } from 'react-redux';


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

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  // login(data) {
  //
  //     return axios.post('/api/auth', data).then(res => {
  //       console.log("login route worked!!");
  //       const token = res.data.token;
  //       localStorage.setItem('jwtToken', token);
  //       setAuthorizationToken(token);
  //       //dispatch(setCurrentUser(jwtDecode(token)));
  //     });
  //
  // }


  onSubmit(e) {
    // e.preventDefault();
    let data = this.state
    console.log("USERDATA in CLIENT onSubmit for LOGIN", data);
    // console.log("state", this.state);
    //
    //  window.location.href = '/scrapbook'

    e.preventDefault();
        //  if (this.isValid()) {
        //      this.setState({ errors: {}, isLoading: true });
        // return dispatch => {




          return axios.post('/api/auth', data).then(res => {
            console.log("login route worked!!", res);
            const token = res.data.token;
            const firstname = res.data.firstname;
            const profilePicture = res.data.profilePicture;
            const id = res.data.id;

            console.log("TOKEN in Client side after hitting server", token);
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('firstname', firstname);
            localStorage.setItem('profilePicture', profilePicture);
            localStorage.setItem('id', id);


            setAuthorizationToken(token);

          }).then(
            //(res) => this.context.router.push('/'),
            // (res) => ,
            (res) => window.location.href = '/scrapbook',
            (err) => console.log("SOMETHING F'D UP")
            // this.setState({ errors: err.response.data.errors, isLoading: false })
          );
        }
























  render() {
    const { errors, identifier, password, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Login</h2>

        <TextFieldGroup
          field="identifier"
          label="Email"
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

        <div className="form-group"><button className="button-logo-2" disabled={isLoading}>Login</button></div>
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
