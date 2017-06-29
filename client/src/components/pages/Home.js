import React, { Component } from 'react'
import Navbar from './../navbar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import ScrapbookForm from '../scrapbook/ScrapbookForm'
//import SignupForm from '../signup/SignupForm'
//import TrashScrapbookItem from '../buttons/deleteBtn.js'
import MyDate from '../date'
//import Modal from '../modal'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      title: '',
      description: '',
      town: '',
      weather: '',
      name: '',
      pic: '',
      temp: 0,
    }
    // if (!localStorage.profile || !localStorage.jwtToken ) {
    //   window.location.href = '/'
    // }
  }

//   componentDidMount(){
//     console.log("LOCAL STORAGE >>>>>>", localStorage);
//     const api = '58443d73bb4adf5b12a65dda8efd13fb'
//     const rio = '2fb0ef496cacff708e1da0ad370562d6'
//     let auth = localStorage.profile
//     let name = localStorage.name
//     let token = localStorage.jwtToken
//     let userid = localStorage.id
//     let userData = ''
//     console.log("NAME", name);
//     console.log("ID", userid);
//     $.ajax({
//       method: 'get',
//       url: `http://api.openweathermap.org/data/2.5/weather?zip=80301,us&units=metric&appid=${rio}`,
//       dataType: 'jsonp',
//       success: function(result) {
//         console.log(result);
//         userData = {
//           cityName: result.name,
//           weatherDesc: result.weather[0].description,
//           temp: result.main.temp
//
//         }
//       },
//       error: function(err) {
//         console.log(err);
//       }
//     }).then(() => {
//       this.setState({town: userData.cityName, weather: userData.weatherDesc, temp: Math.ceil(userData.temp)})
//     }).then(() => {
//     fetch('/api/scrapbook', {
//            method: 'GET'
//          }).then(res => {
//          return res.text().then(pics => {
//            pics = JSON.parse(pics)
//            let picItems = pics.filter(entry => {
//              return entry.user_id == userid
//            })
//            this.setState({
//              //id: pics,
//              photos: picItems
//             // title: pics,
//             // description: pics
//            })
//             console.log("PICS", pics);
//           })
//      })
//    }).then(() => this.setState({name: localStorage.name})
// )
//    }

componentDidMount(){
  console.log("LOCAL STORAGE >>>>>>", localStorage);
  const api = '58443d73bb4adf5b12a65dda8efd13fb'
  const rio = '2fb0ef496cacff708e1da0ad370562d6'
  let auth = localStorage.profile
  let name = localStorage.name
  let token = localStorage.jwtToken
  let userid = localStorage.id
  let userData = ''
  console.log("NAME", name);
  console.log("ID", userid);
  this.setState({ name: name })
  $.ajax({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/weather?zip=80301,us&units=metric&appid=${rio}`,
    dataType: 'jsonp',
    success: function(result) {
      console.log(result);
      userData = {
        cityName: result.name,
        weather: result.weather[0].description,
        temp: result.main.temp

      }
      localStorage.setItem('cityName', userData.cityName)
      localStorage.setItem('weather', userData.weather)
      localStorage.setItem('temp', userData.temp)

    },
    error: function(err) {
      console.log(err);
    }
  })

    this.setState({town: localStorage.cityName, weather: localStorage.weather, temp: Math.ceil(parseInt(localStorage.temp))})

  fetch('/api/scrapbook', {
         method: 'GET'
       }).then(res => {
       return res.text().then(pics => {
         pics = JSON.parse(pics)
         let picItems = pics.filter(entry => {
           return entry.user_id == userid
         })
         this.setState({
           //id: pics,
           photos: picItems
          // title: pics,
          // description: pics
         })
          console.log("PICS", pics);
        })

 })
 }

  render() {

    let recent = this.state.photos
    let town = localStorage.cityName
    let weather = localStorage.weather
    let temp = localStorage.temp
    let picsList = recent.map(function(picsDisplay) {
      console.log("ID", picsDisplay.id);
      let id = picsDisplay.id
      return (
      <li>
        <Link to={"/scrapbook/edit/" + id} title={picsDisplay.title} id={picsDisplay.id}><img src={picsDisplay.item_image} alt={picsDisplay.title}/></Link>
        </li>


      )
    })
      return (
          <div>
            <Navbar />
            <MyDate />
              <div>
              <div className="splash">
              <h1 className="splash"> Welcome, { this.state.name }!</h1>
              <div className="outline">


              <h3> We have { weather } in { town }, Colorado today. </h3><h3>The temperature is { temp }&#176; C </h3></div>
              </div>
              </div>

<div><button type="button" className="btn btn-default btn-circle btn-lg" data-toggle="modal" data-target="#myModal"><i className="glyphicon glyphicon-ok"></i>  </button>Add Photo
</div>








     <div className="row">
     <div className="container-nav">
           <ul className="polaroids">
              {picsList}
          </ul>
          </div></div>
          <section className="clear-both" />



          <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
          <div className="modal-content">
          <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title" id="myModalLabel">New Photo</h4>
          </div>
              <div className="modal-body">
              <ScrapbookForm />
              </div>
          </div>
          </div>
          </div>





          </div>

      )
  }
}
Home.propTypes = {
  //userSignupRequest: React.PropTypes.func.isRequired,
}
export default Home
