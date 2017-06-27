import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import Modal from '../modal'
import MyDate from '../date'

class Profile extends Component {
  state = {
    todos: [],
  };


  componentDidMount() {
    // let userData = ''
    // fetch('/api/todos', {
    //        method: 'GET'
    //      }).then(res => {
    //      return res.text().then(todos => {
    //        todos = JSON.parse(todos)
    //        this.setState({
    //          //id: pics,
    //          todos: todos
    //         // title: pics,
    //         // description: pics
    //        })
    //         console.log("TODOS", todos);
    //       })
    // })
   }

   renderTodos = () => {

  };
  render() {
      return (
          <div>
          <Navbar />

          <div className="container profileEdit">
    <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">

            <h1 className="text-center">Edit Profile</h1>

            <div className="text-center">
                <img src="" alt="user image" className="menuPhoto text-center"/>
            </div>

            <form>
                <div>
                    <label className="forms" for="photo">Photo URL</label>
                    <input ng-model="$ctrl.user.photo" id="photo" clasNamesName="form-control col-xl-6 offset-xl-3"/>
                </div>

                <div>
                    <label className="forms" for="username">Username</label>
                    <input ng-model="$ctrl.user.username" id="username" className="form-control"/>
                </div>

                <div>
                    <label className="forms" for="email">Email</label>
                    <input ng-model="$ctrl.user.email" id="email" className="form-control"/>
                </div>

                <div>
                    <label className="forms" for="bio">Bio</label>
                    <textarea ng-model="$ctrl.user.bio" class="form-control"></textarea>
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="password" ng-model="$ctrl.newPassword.email" id="password" placeholder="New Password" className="form-control"/>
                </div> 
                <div className="profileEditButtons">
                  <span className="form-group ">
                    <button type="submit" className="btn btn-primary cancelBtn">Update</button>
                  </span>
                  <span className="form-group">  <a ui-sref="sources" className="btn btn-primary cancelBtn pull-right" data-toggle="tooltip" title="cancel">X</a></span>
                </div>


            </form>
        </div>


    </div>



</div>




          </div>
      )
  }
}

export default Profile
