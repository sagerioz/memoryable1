import React, { Component } from 'react'
import Navbar from './../navbar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import ScrapbookForm from '../scrapbook/ScrapbookForm'
import SignupForm from '../signup/SignupForm'
import TrashScrapbookItem from '../buttons/deleteBtn.js'
import MyDate from '../date'
import Modal from '../modal'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      title: '',
      description: '',
      town: '',
      weather: '',
      temp: 0
    }
    if (localStorage.profile) {
      window.location.href = '/'
    }
  }

  componentDidMount(){
    console.log("LOCAL STORAGE >>>>>>", localStorage);
    const api = '58443d73bb4adf5b12a65dda8efd13fb'
    const rio = '2fb0ef496cacff708e1da0ad370562d6'
    let auth = localStorage.profile
    let userData = ''
    $.ajax({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?zip=80301,us&units=metric&appid=${api}`,
      dataType: 'jsonp',
      success: function(result) {
        console.log(result);
        userData = {
          cityName: result.name,
          weatherDesc: result.weather[0].description,
          temp: result.main.temp

        }
      },
      error: function(err) {
        console.log(err);
      }
    }).then(() => {
      this.setState({town: userData.cityName, weather: userData.weatherDesc, temp: Math.ceil(userData.temp)})
    }).then(() => {
    fetch('/api/scrapbook', {
           method: 'GET'
         }).then(res => {
         return res.text().then(pics => {
           pics = JSON.parse(pics)
           this.setState({
             //id: pics,
             photos: pics
            // title: pics,
            // description: pics
           })
            console.log("PICS", pics);
          })
     })
   })
   }



  render() {

    let recent = this.state.photos
    let town = this.state.town
    let weather = this.state.weather
    let temp = this.state.temp
    let picsList = recent.map(function(picsDisplay) {
      console.log("ID", picsDisplay.id);
      let id = picsDisplay.id
      return (
      <li>
        <a href={"/scrapbook/edit/" + id} title={picsDisplay.title} id={picsDisplay.id}><img src={picsDisplay.item_image} alt={picsDisplay.title}/></a>
        </li>


      )
    })
      return (
          <div>
            <Navbar />
              <div>
              <div className="splash">
              <h1> welcome, Loreley!</h1>
              <MyDate />
              <h3> We have { weather } in { town }, Colorado today. The temperature is { temp }&#176; C </h3><br/>
              </div>
              </div>










     <div className="row">
     <div className="container-nav">
           <ul className="polaroids">
              {picsList}
          </ul>
          </div></div>
          <section className="clear-both" /><br/>
          <ScrapbookForm />
          </div>

      )
  }
}

export default Home
