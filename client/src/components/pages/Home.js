import React, { Component } from 'react'
import Navbar from './../navbar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import ScrapbookForm from '../scrapbook/ScrapbookForm';
import SignupForm from '../signup/SignupForm';
import TrashScrapbookItem from '../buttons/deleteBtn.js'
import MyDate from '../date'

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
  }

  componentDidMount(){
    const api = '58443d73bb4adf5b12a65dda8efd13fb'
    const rio = '2fb0ef496cacff708e1da0ad370562d6'
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
      return (


        <div>
        <a href="#" title={picsDisplay.title} className="abtn polaroids"><img src={picsDisplay.item_image} alt={picsDisplay.title}/></a>
        </div>


      )
    })
      return (
          <div>
            <Navbar />
              <div>
              <div className="splash">
              <h1> Welcome, Loreley</h1>
              <MyDate />
              <h3> { weather } in { town }, Colorado today. The temperature is { temp }&#176; C </h3>
              </div>
              </div>














              <div class="row">
     <div class="large-12 columns">
           <ul className="polaroids">
                    {picsList}
          </ul>
          </div></div>
          <ScrapbookForm />
          </div>

      )
  }
}

export default Home
