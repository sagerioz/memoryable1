import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import $ from 'jquery'
import ScrapbookPage from '../scrapbook/ScrapbookPage';


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      title: '',
      town: ''
    }
  }

  componentDidMount(){
    const apiKey = '58443d73bb4adf5b12a65dda8efd13fb'
    let userData = ''
    $.ajax({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?zip=80301,us&units=metric&appid=${apiKey}`,
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
        console.log("TEMP TODAY IS", Math.ceil(userData.temp) , " degrees Celcius");
        console.log("userdata IS ", userData);
      //  console.log("state IS ", this.state);
       //return userData

      },
      error: function(err) {
        console.log(err);
      }
    }).then(() => {
      this.setState({town: userData.cityName, weather: userData.weatherDesc, temp: Math.ceil(userData.temp)})
      console.log("TOWN!!", this.state.town);
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
    let town = this.state.town
    let weather = this.state.weather
    let temp = this.state.temp
    let picsList = recent.map(function(picsDisplay) {
      return <div><img src={picsDisplay.item_image} width="25%" alt="scrapbook_photo"/>
      <p>{picsDisplay.title}</p>
      <p>{picsDisplay.description}</p></div>
    })
    // let picsTitle = recent.map(function(picsTitleDisplay) {
    //   return <p>{picsTitleDisplay.title}</p>
    // })
      return (
          <div>
            <Navbar />
              <div className="container">
              <div>
              <h1> Hello, Loreley</h1>
              <h3> { weather } in { town } today. The temperature is { temp } degrees C </h3>
              </div>
                  <div>{picsList}</div>

              </div>
              <div><ScrapbookPage/></div>
          </div>
      )
  }
}

export default Home
