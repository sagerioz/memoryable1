import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import $ from 'jquery'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      title: ''
    }
  }

  componentDidMount(){
    const apiKey = '58443d73bb4adf5b12a65dda8efd13fb'
    let userData = ''
    $.ajax({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?zip=80301,us&appid=${apiKey}`,
      dataType: 'jsonp',
      success: function(result) {
        console.log(result);
        userData = {
          cityName: result.name,
          weatherDesc: result.weather[0].description,
          temp: result.main.temp

        }
        console.log("TOWN",userData.cityName);
        console.log("WEATHER TODAY IS", userData.weatherDesc);
        console.log("TEMP TODAY IS", userData.temp);

      },
      error: function(err) {
        console.log(err);
      }
    }).then(() => {
    fetch('/api/scrapbook', {
           method: 'GET'
         }).then(res => {
         return res.text().then(pics => {
           pics = JSON.parse(pics)
           this.setState({
             photos: pics,
             title: pics
           })
            console.log("PICS", pics);
          })
     })
   })
   }



  render() {
    let recent = this.state.photos
    let picsList = recent.map(function(picsDisplay) {
      return <img src={picsDisplay.item_image} width="25%" alt="scrapbook_photo"/>
    })
    let picsTitle = recent.map(function(picsTitleDisplay) {
      return <p>{picsTitleDisplay.title}</p>
    })
      return (
          <div>
            <Navbar />
              <div className="container">

                  <div>{picsList}{picsTitle}</div>

              </div>
          </div>
      )
  }
}

export default Home
